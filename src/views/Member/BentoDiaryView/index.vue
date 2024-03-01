<template>
  <loadingVue :active="isLoading"/>
  <div class="container flex-fill">
    <h2 class="text-center my-2">我的便當日記</h2>
    <div class="calendar-wrap rounded border border-primary bg-light p-4 my-3 mx-auto">
      <FullCalendar :options="calendarOptions" ref="FullCalendar" />
    </div>
  </div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import rrulePlugin from '@fullcalendar/rrule'
import FreeDaysData from '../FreeDaysData'

let calendarWrap = null;

export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data() {
    return {
      isLoading: false,
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin, rrulePlugin],
        locale: "zh-tw",
        initialView: 'dayGridMonth',
        buttonText: { today: "今天" },
        headerToolbar: {
          start: 'today',
          center: 'prev,title,next',
          end: 'setFreeDayBtn'
        },
        customButtons: {
          setFreeDayBtn: {
            text: '設定放縱日',
            click: () => {
              // alert('clicked the custom button!');
              this.$router.push({name: 'FreeDays'})
            },
            backgroundColor: "524786",
          }
        },
        fixedWeekCount: false,
        showNonCurrentDates: false,
        height: "auto",
        dateClick: this.handleDateClick,
        events: [
          { title: '午餐便當', date: '2024-02-25' },
          { title: '晚餐便當', date: '2024-02-25' },
          // {
          //   title: 'event 2',
          //   date: '2024-02-28'
          // },
          // {
          //   start: '2024-02-24',
          //   display: 'background',
          //   backgroundColor: "#462056",
          // },
          // {
          //   start: '2024-02-23',
          //   display: 'background',
          //   backgroundColor: "#462056",
          // },
          {
            title: "午餐",
            daysOfWeek: [3], // 指定事件在星期三發生
            // start: '2024-02-24', // 設定事件的開始時間
            // endTime: "17:00", // 設定事件的結束時間
            startRecur: "2024-02-24", // 開始日期（第一次事件發生的日期）
            // endRecur: "2024-12-31" // 結束日期（最後一次事件發生的日期）
          },
          // {
            // daysOfWeek: [3], // 指定事件在星期三發生
            // start: '8:00', // 設定事件的開始時間
            // endTime: "17:00", // 設定事件的結束時間
            // startRecur: "2024-02-27", // 開始日期（第一次事件發生的日期）
            // endRecur: "2024-12-31" // 結束日期（最後一次事件發生的日期）
            // display: 'background',
            // backgroundColor: "orange",
          // }
        ],
        eventClick: this.eventClick,
        eventClassNames: this.eventClassNames,
      },
      freeDays: {},
      fullCalendarDOM: null
    }
  },
  emits: ['updateProfile'],
  mixins: [FreeDaysData],
  watch: {
    freeDays(value){
      if(value.weekly){
        this.initFreeDaysRule()
      }
    }
  },
  methods: {
    handleDateClick(arg) {
      alert('date click! ' + arg.dateStr)
    },
    eventClick(info) {
      // 檢查被點選的事件元素是否包含 lunch-bento 類
      if (info.el.classList.contains("lunch-bento")) {
        alert("午餐便當: " + info.event.title);
        info.el.style.borderColor = "red";
      }
    },
    eventClassNames(arg) {
      if (arg.event.title === "午餐便當") {
        return ['lunch-bento']
      } else if (arg.event.title === "晚餐便當") {
        return ['dinner-bento']
      }
    },
    resizeCalendar() {
      if (window.innerWidth >= 992) {
        calendarWrap.classList.add("col-md-10");
      } else {
        calendarWrap.classList.remove("col-md-10");
      }
    },
    initFreeDaysRule(){
      // 設定所有週期放縱日的起始時間
      const dtstart_init = ['2024', '01', '01']
      const dtstart = dtstart_init.join('-')

      // 設定每週的放縱日事件
      if(this.freeDays.weekly.length){
        this.renderFreeDays({
          rrule: {
            freq: 'weekly',
            dtstart,
            byweekday: this.freeDays.weekly,
          }
        })
      }
      
      // 設定每月的放縱日事件
      if(this.freeDays.monthly.length){
        this.renderFreeDays({
          rrule: {
            freq: 'monthly',
            dtstart,
            bymonthday: this.freeDays.monthly,
          }
        })
      }
      
      // 設定每年的放縱日事件
      this.freeDays.yearly.forEach(date => {
        const [month, day] = date.split('/')
        this.renderFreeDays({
          rrule: {
            freq: 'yearly',
            dtstart: `${dtstart_init[0]}-${month}-${day}`
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
    renderFreeDays(rules){
      const settings = {
        title: ' free day',  // 前方留空白，讓放縱日事件維持在最上方
        display: 'list-item',
        color: '#d89e21',
      }
      this.fullCalendarDOM.addEvent({
        ...settings,
        ...rules
      })
    },
  },
  mounted() {
    calendarWrap = document.querySelector(".calendar-wrap");
    this.resizeCalendar();
    window.addEventListener("resize", this.resizeCalendar);

    const nextBtn = document.querySelector(".fc-next-button");
    nextBtn.click();
    const todayBtn = document.querySelector(".fc-today-button");
    todayBtn.click();

    // api 取得放縱日資料
    this.getFreeDaysData();
    this.fullCalendarDOM = this.$refs.FullCalendar.calendar
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

/* 減少日期格子的margin-bottom以免畫面過長 */
.fc .fc-daygrid-body-natural .fc-daygrid-day-events {
  margin-bottom: 0.5rem;
  /* 以下也可以用來調整事件之間的距離 */
  /* display: flex;
    flex-direction: column;
    gap: 0.2rem; */
}


/* headerToolbar */
/* 將title換成inline-block避免換行 */
.fc-header-toolbar .fc-toolbar-title {
  display: inline-block;
  margin-right: 1rem;
  margin-left: 1rem;
}

/* 調整title與bts的水平置中 */
.fc .fc-toolbar-chunk div {
  display: flex;
  align-items: center;
  /* gap: 1rem; */
}


/* 事件 */
/* 將事件的文字置中與增加padding以增加事件高度 */
.fc-event-title-container {
  padding: 0.5rem;
  text-align: center;
}

/* 增加事件之間的間距 */
.fc-daygrid-event-harness {
  margin-bottom: 0.2rem;
}

/* 放縱日重複事件，只顯示一次 */
.fc-daygrid-event-harness:not(:first-child) .fc-daygrid-dot-event{
  display: none;
}

/* 調整 dot 大小 */
.fc-daygrid-event-dot{
  border-width: 3px;
}
/* 放縱日僅為標示，不使用 hover 互動 */
.fc-daygrid-dot-event.fc-event-mirror, .fc-daygrid-dot-event:hover{
  background: inherit;
  color: var(--bs-primary);
}
/* 手機板將字體縮小 */
@media (max-width: 575px) {
  a.fc-daygrid-dot-event .fc-event-title {
    font-size: 9px;
  }
  .fc-daygrid-event-dot{
    display: none;
  }
}
</style>