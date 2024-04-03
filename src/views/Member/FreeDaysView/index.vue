<template>
  <loadingVue :active="isLoading" />
  <DeleteModal ref="DeleteModal" @remove-item="removeFreeDays"/>
  <div class="container flex-fill d-flex flex-column pb-5">
    <h2 class="text-center my-3">我的放縱日</h2>
    <template v-if="freeDays.weekly">
      <div class="btn-group">
        <input type="radio" class="btn-check" id="btn-check" name="mode" @click="isSpecificDay = false" :checked="!isSpecificDay">
        <label class="btn btn-lg btn-outline-primary" :class="{'text-white': !isSpecificDay}" for="btn-check">週期放縱</label>
        <input type="radio" class="btn-check" id="btn-check-2" name="mode" @click="isSpecificDay = true" :checked="isSpecificDay">
        <label class="btn btn-lg btn-outline-primary" :class="{'text-white': isSpecificDay}" for="btn-check-2">特定放縱</label>
      </div>
      <div class="border border-primary border-top-0 rounded-bottom p-4 pt-5 flex-fill" style="transform: translateY(-5px);">
        <template v-if="!isSpecificDay">
          <div class="row g-1">
            <div class="col-auto">
              <h5 class="mb-0 mt-2 me-4">每週：</h5>
            </div>
            <div class="col-12 col-md">
              <div class="my-2 my-md-0">
                <select class="form-select form-select me-4 w-auto d-inline-block" v-model="select.weekly" :disabled="freeDays.weekly.length >= 7">
                  <option value="" selected disabled>請選擇星期</option>
                  <option :value="key" v-for="(title, key) in template.weekTitle" :key="'weekly' + key">{{ title }}</option>
                </select>
                <button type="button" class="btn btn-primary mb-1" :disabled="select.weekly === ''" @click="addWeekly(select.weekly)">新增</button>
              </div>
              <p class="my-2" v-if="freeDays.weekly.length">
                <template v-for="(day, key) in freeDays.weekly" :key="'day' + key">
                  <button type="button" class="btn btn-outline-secondary me-2 mb-2 pe-3" @click="removeConfirm('weekly', day)">
                    <i class="bi bi-x me-1"></i>{{ `每週${template.weekTitle[day]}` }}
                  </button>
                </template>
              </p>
              <p class="text-muted my-2" v-else>無設定每週的放縱日</p>
            </div>
          </div>

          <div class="row mt-4 g-1">
            <div class="col-auto">
              <h5 class="mb-0 mt-2 me-4">每月：</h5>
            </div>
            <div class="col-12 col-md">
              <div class="my-2 my-md-0">
                <select class="form-select form-select me-4 w-auto d-inline-block" v-model="select.monthly" :disabled="freeDays.monthly.length >= 31">
                  <option value="" selected disabled>請選擇日期</option>
                  <option :value="i" v-for="i in 31" :key="'day' + i">{{ `${i}號` }}</option>
                </select>
                <button type="button" class="btn btn-primary mb-1" :disabled="select.monthly === ''" @click="addMonthly(select.monthly)">新增</button>
              </div>
              <p class="my-2" v-if="freeDays.monthly.length">
                <template v-for="(day, key) in freeDays.monthly" :key="'day' + key">
                  <button type="button" class="btn btn-outline-secondary me-2 mb-2 pe-3" @click="removeConfirm('monthly', day)">
                    <i class="bi bi-x me-1"></i>{{ `每月${day}號` }}
                  </button>
                </template>
              </p>
              <p class="text-muted my-2" v-else>無設定每月的放縱日</p>
            </div>
          </div>

          <div class="row mt-4 g-1">
            <div class="col-auto">
              <h5 class="mb-0 mt-3 me-4">每年：</h5>
            </div>
            <div class="col-12 col-md">
              <select class="form-select form-select me-4 w-auto d-inline-block" v-model="select.yearly.month"
                @change="setTemplateDay(select.yearly.month)">
                <option value="" selected disabled>請選擇月份</option>
                <option :value="i" v-for="i in 12" :key="'day' + i">{{ `${i}月` }}</option>
              </select>
              <select class="form-select form-select my-2 me-4 w-auto d-inline-block" v-model="select.yearly.day"
                :disabled="select.yearly.month === ''">
                <option value="" selected disabled>請選擇日期</option>
                <option :value="i" v-for="i in template.day" :key="'day' + i">{{ `${i}號` }}</option>
              </select>
              <button type="button" class="btn btn-primary mb-1"
                :disabled="select.yearly.month === '' || select.yearly.day === ''"
                @click="addYearly(select.yearly)">新增</button>
              <p class="text-muted" v-if="!freeDays.yearly.length">無設定每年的放縱日</p>
            </div>
          </div>
          <ul class="list-group border overflow-y-auto mt-2"
            style="max-height: 250px;" v-if="freeDays.yearly.length">
            <li class="list-group-item" v-for="(day, key) in freeDays.yearly" :key="'year' + key">
              <div class="d-flex align-items-center">
                <p class="mb-0">{{ `${key + 1}.` }}</p>
                <p class="mb-0 mx-2 flex-fill text-center">{{ day }}</p>
                <button type="button" class="btn border-0 stretched-link" @click="removeConfirm('yearly', day)">
                  <i class="bi bi-x-lg"></i>
                </button>
              </div>
            </li>
          </ul>
        </template>

        <template v-else>
          <div>
            <input type="date" class="form-control me-4 w-auto d-inline-block"
              v-model="select.specific">
            <button type="button" class="btn btn-primary mb-1" :disabled="select.specific === ''"
              @click="addSpecificDay(select.specific)">新增</button>
          </div>
          <ul class="list-group border overflow-y-auto mt-3"
            style="max-height: 250px;" v-if="freeDays.specific.length">
            <li class="list-group-item" v-for="(day, key) in freeDays.specific" :key="'year' + key">
              <div class="d-flex align-items-center">
                <p class="mb-0">{{ `${key + 1}.` }}</p>
                <p class="mb-0 mx-2 flex-fill text-center">{{ day }}</p>
                <button type="button" class="btn border-0 stretched-link" @click="removeConfirm('specific', day)">
                  <i class="bi bi-x-lg"></i>
                </button>
              </div>
            </li>
          </ul>
          <p class="text-muted mt-2 ms-1" v-else>無設定特定日期的放縱日</p>
        </template>
      </div>

    </template>
  </div>
</template>

<script>
import { toast } from 'vue3-toastify'
import DeleteModal from '../DeleteModal'
import FreeDaysData from '../FreeDaysData'

document.title = '放縱一下'

export default {
  data () {
    return {
      isLoading: false,
      isSpecificDay: false,
      template: {
        weekTitle: [
          '一',
          '二',
          '三',
          '四',
          '五',
          '六',
          '日'
        ],
        day: 30
      },
      freeDays: {},
      select: {
        weekly: '',
        monthly: '',
        yearly: {
          month: '',
          day: ''
        },
        specific: ''
      },
      deleteTemp: {}
    }
  },
  emits: ['updateProfile'],
  components: {
    DeleteModal
  },
  mixins: [FreeDaysData],
  methods: {
    updateFreeDaysData (key) {
      this.isLoading = true
      const data = {}
      data[key] = this.freeDays[key]
      this.axios.patch(`${import.meta.env.VITE_APP_SERVER_URL}/600/freeDays/${this.freeDays.id}`, data, {
        headers: {
          authorization: this.$cookie.getMemberToken()
        }
      })
        .then(() => {
          toast.success('放縱日已更新')
          this.getFreeDaysData()
        }).catch(e => {
          toast.error(e.data?.message || e)
          this.isLoading = false
        })
    },
    setTemplateDay (month) {
      this.select.yearly.day = ''
      this.template.day = new Date(2024, month, 0).getDate()
    },
    setStringFormat (number) {
      return number < 10 ? `0${number}` : number
    },
    addWeekly (day) {
      const index = this.freeDays.weekly.indexOf(day)
      if (index < 0) {
        this.freeDays.weekly.push(day)
        this.freeDays.weekly.sort((a, b) => a - b)
        this.updateFreeDaysData('weekly')
      } else {
        this.showWarningToast(`每週${this.template.weekTitle[day]}`)
      }
      this.select.weekly = ''
    },
    addMonthly (day) {
      const index = this.freeDays.monthly.indexOf(day)
      if (index < 0) {
        this.freeDays.monthly.push(day)
        this.freeDays.monthly.sort((a, b) => a - b)
        this.updateFreeDaysData('monthly')
      } else {
        this.showWarningToast(`每月${day}號`)
      }
      this.select.monthly = ''
    },
    addYearly ({ month, day }) {
      const date = `${this.setStringFormat(month)}/${this.setStringFormat(day)}`
      const index = this.freeDays.yearly.indexOf(date)
      if (index < 0) {
        this.freeDays.yearly.push(date)
        this.freeDays.yearly.sort()
        this.updateFreeDaysData('yearly')
      } else {
        this.showWarningToast(date)
      }
      this.select.yearly.month = ''
      this.select.yearly.day = ''
    },
    addSpecificDay (date) {
      date = date.replaceAll('-', '/')
      const index = this.freeDays.specific.indexOf(date)
      if (index < 0) {
        this.freeDays.specific.push(date)
        this.freeDays.specific.sort()
        this.updateFreeDaysData('specific')
      } else {
        this.showWarningToast(date)
      }
      this.select.specific = ''
    },
    showWarningToast (msg) {
      toast.warn(`「${msg}」放縱日已設定過`, {
        autoClose: 3000
      })
    },
    removeConfirm (mode, day) {
      this.deleteTemp = {
        mode,
        day
      }
      let message = ''
      switch (mode) {
        case 'weekly':{
          message = `每週${this.template.weekTitle[day]}`
          break
        }
        case 'monthly':{
          message = `每月${day}號`
          break
        }
        case 'yearly': {
          const strPart = day.split('/')
          message = `每年${strPart[0]}月${strPart[1]}日`
          break
        }
        case 'specific': {
          const strPart = day.split('/')
          message = `${strPart[0]}年${strPart[1]}月${strPart[2]}日`
          break
        }
      }
      this.$refs.DeleteModal.show(message)
    },
    removeFreeDays () {
      const { mode, day } = this.deleteTemp
      const index = this.freeDays[mode].indexOf(day)
      if (index > -1) {
        this.freeDays[mode].splice(index, 1)
        this.updateFreeDaysData(mode)
      }
    }
  },
  mounted () {
    this.getFreeDaysData()
  }
}
</script>

<style lang="scss" scoped>
.btn:disabled{
  color: white;
}
.list-group-item{
  border: 0px;
  border-bottom: 1px solid var(--bs-list-group-border-color);
}
.list-group-item:last-child{
  border-bottom: 0px;
}

.list-group-item:hover{
  background-color: var(--bs-secondary);
  opacity: 0.6;
  color: white;
}
</style>
