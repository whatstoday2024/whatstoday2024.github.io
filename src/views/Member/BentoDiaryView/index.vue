<template>
  <loadingVue :active="isLoading" />
  <div class="container flex-fill d-flex align-items-center">
    <div>
      <h2 class="text-center my-3">我的便當日記</h2>
      <div class="calendar-wrap rounded border border-primary bg-light p-4 my-3 mx-auto">
        <FullCalendar :options="calendarOptions" ref="FullCalendar" />
      </div>
    </div>
  </div>

  <!-- 便當相關 Modal -->
  <BentoComponent :bento-temp="bentoTemp" :member-data="memberData" :delete-from-calendar="deleteFromCalendar" />
</template>

<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import rrulePlugin from '@fullcalendar/rrule'
import FreeDaysData from '../FreeDaysData'
import { mapState, mapActions } from 'pinia'
import memberData from '@/stores/memberData'
import BentoComponent from '@/views/MenuView/BentoComponent.vue'
import Modal from 'bootstrap/js/dist/modal'
import { toast } from 'vue3-toastify'

document.title = '飲食紀錄'

export default {
  components: { FullCalendar, BentoComponent },
  data() {
    return {
      isLoading: false,
      calendarWrap: null,
      windowWidth: window.innerWidth,
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin, rrulePlugin],
        locale: 'zh-tw',
        initialView: 'dayGridMonth',
        buttonText: { today: '今天' },
        headerToolbar: {
          start: 'today',
          center: 'prev,title,next',
          end: 'setFreeDayBtn'
        },
        customButtons: {
          setFreeDayBtn: {
            text: '設定放縱日',
            click: () => {
              this.$router.push({ name: 'FreeDays' })
            }
          }
        },
        fixedWeekCount: false,
        showNonCurrentDates: false,
        height: 'auto',
        events: [],
        eventClick: this.eventClick,
        eventClassNames: this.eventClassNames
      },
      freeDays: {},
      fullCalendarDOM: null,
      bentoRecords: [],
      bentoTemp: {
        stapleCourse: {},
        mainCourse: {},
        sideDishes: [],
        date: '',
        mealType: '',
        starchTotalPortion: 0,
        proteinTotalPortion: 0,
        vegetableTotalPortion: 0
      },
      bentoModal: null,
      successDelay: 1500,
      errorDelay: 2000
    }
  },
  emits: ['updateProfile'],
  mixins: [FreeDaysData],
  watch: {
    freeDays(value) {
      if (value.weekly) {
        this.initFreeDaysRule()
      }
    }
  },
  computed: {
    ...mapState(memberData, ['memberData'])
  },
  methods: {
    deleteFromCalendar() {
      this.isLoading = true
      this.fullCalendarDOM.getEventById(this.bentoTemp.idTemp).remove()
      this.isLoading = false
    },
    eventClick(info) {
      // if (info.event.title.startsWith("午餐") || info.event.title.startsWith("晚餐")) {
      if (/^(午餐|晚餐)/.test(info.event.title)) {
        this.bentoTemp = info.event._def.extendedProps
        this.bentoModal.show()
      }
    },
    eventClassNames(info) {
      if (info.event.title.startsWith('午餐')) {
        return ['lunch-bento', 'bg-brand-blue']
      } else if (info.event.title.startsWith('晚餐')) {
        return ['dinner-bento', 'bg-brand-red']
      }
    },
    resizeCalendar() {
      if (window.innerWidth >= 992) {
        this.calendarWrap.classList.add('col-md-10')
      } else {
        this.calendarWrap.classList.remove('col-md-10')
      }
    },
    initFreeDaysRule() {
      // 設定所有週期放縱日的起始時間
      const dtstartInit = ['2024', '01', '01']
      const dtstart = dtstartInit.join('-')

      // 設定每週的放縱日事件
      if (this.freeDays.weekly.length) {
        this.renderFreeDays({
          rrule: {
            freq: 'weekly',
            dtstart,
            byweekday: this.freeDays.weekly
          }
        })
      }

      // 設定每月的放縱日事件
      if (this.freeDays.monthly.length) {
        this.renderFreeDays({
          rrule: {
            freq: 'monthly',
            dtstart,
            bymonthday: this.freeDays.monthly
          }
        })
      }

      // 設定每年的放縱日事件
      this.freeDays.yearly.forEach(date => {
        const [month, day] = date.split('/')
        this.renderFreeDays({
          rrule: {
            freq: 'yearly',
            dtstart: `${dtstartInit[0]}-${month}-${day}`
          }
        })
      })

      // 設定特定日期的放縱日事件
      this.freeDays.specific.forEach(specificDate => {
        const date = specificDate.replaceAll('/', '-')
        this.renderFreeDays({
          date
        })
      })
    },
    renderFreeDays(rules) {
      const settings = {
        title: ' free day', // 前方留空白，讓放縱日事件維持在最上方
        display: 'list-item',
        color: '#d89e21'
      }
      this.fullCalendarDOM.addEvent({
        ...settings,
        ...rules
      })
    },
    async getBentoRecords() {
      try {
        const res = await this.axios.get(`${import.meta.env.VITE_APP_SERVER_URL}/600/users/${this.memberData.id}/records/`)
        this.bentoRecords = res.data.message
      } catch (error) {
        toast.error('發生了某些錯誤，將重新整理頁面。', {
          autoClose: this.errorDelay
        })
        setTimeout(() => { location.reload() }, this.errorDelay)
      }

      this.bentoRecords.forEach((record) => {
        this.fullCalendarDOM.addEvent({
          ...record,
          dateTemp: record.date,
          idTemp: record.id,
          title: this.windowWidth > 576 ? `${record.mealType}便當` : record.mealType
        })
      })
    },
    ...mapActions(memberData, ['getUser'])
  },
  async mounted() {
    this.calendarWrap = document.querySelector('.calendar-wrap')
    this.resizeCalendar()
    window.addEventListener('resize', this.resizeCalendar)

    const nextBtn = document.querySelector('.fc-next-button')
    nextBtn.click()
    const todayBtn = document.querySelector('.fc-today-button')
    todayBtn.click()

    // api 取得放縱日資料
    this.getFreeDaysData()
    this.fullCalendarDOM = this.$refs.FullCalendar.calendar

    // api 取得便當紀錄
    await this.getUser()
    await this.getBentoRecords()

    this.bentoModal = new Modal(document.querySelector('#bentoModal'))
  }
}
</script>

<style>
/* 月曆基本設定 */
/* 讓日期文字置左 */
.fc .fc-daygrid-day-top {
  /* flex-direction: row */
  justify-content: start;
}

/* 將日期與星期幾的文字改成無底線與灰色 */
.fc .fc-daygrid-day-number,
.fc .fc-col-header-cell-cushion {
  text-decoration: none;
  color: #6c757d;
}

/* 增加日期文字左右的padding */
.fc-daygrid-day-frame {
  padding-right: 0.2rem;
  padding-left: 0.2rem;
}

/* 手機版時將padding調小 */
@media (max-width: 576px) {
  .fc-daygrid-day-frame {
    padding-right: 0;
    padding-left: 0;
  }
}

/* 減少日期格子的margin-bottom以免畫面過長 */
.fc .fc-daygrid-body-natural .fc-daygrid-day-events {
  margin-bottom: 0.5rem;
  /* 以下也可以用來調整事件之間的距離 */
  /* display: flex;
    flex-direction: column;
    gap: 0.2rem; */
}

/* headerToolbar */
/* 調整title與bts的水平置中 */
.fc .fc-toolbar-chunk div {
  display: flex;
  align-items: center;
  /* gap: 1rem; */
}

/* 將title換成inline-block避免換行 */
.fc-header-toolbar .fc-toolbar-title {
  display: inline-block;
  margin-right: 1rem;
  margin-left: 1rem;
}

/* 手機版的時候將margin、padding、font-size調小 */
@media (max-width: 576px) {
  .fc .fc-toolbar.fc-header-toolbar {
    margin-bottom: 10px;
  }

  .fc-header-toolbar .fc-toolbar-title {
    font-size: 1.2rem;
    margin-right: 0.2rem;
    margin-left: 0.2rem;
  }

  .fc-header-toolbar .fc-button-primary {
    padding-right: 6px;
    padding-left: 6px;
  }
}

/* 事件 */
/* 將事件的文字置中與增加padding以增加事件高度 */
.fc-event-title-container {
  padding: 0.5rem;
  text-align: center;
}

/* 手機版的時候將padding調小 */
@media (max-width: 576px) {
  .fc-event-title-container {
    padding: 0.4rem;
  }
}

/* 增加事件之間的間距 */
.fc-daygrid-event-harness {
  margin-bottom: 0.2rem;
}

/* 放縱日重複事件，只顯示一次 */
.fc-daygrid-event-harness:not(:first-child) .fc-daygrid-dot-event {
  display: none;
}

/* 調整 dot 大小 */
.fc-daygrid-event-dot {
  border-width: 3px;
}

/* 放縱日僅為標示，不使用 hover 互動 */
.fc-daygrid-dot-event.fc-event-mirror,
.fc-daygrid-dot-event:hover {
  background: inherit;
  color: var(--bs-primary);
}

/* 手機板將字體縮小 */
@media (max-width: 575px) {
  a.fc-daygrid-dot-event .fc-event-title {
    font-size: 9px;
  }

  .fc-daygrid-event-dot {
    display: none;
  }
}
</style>
