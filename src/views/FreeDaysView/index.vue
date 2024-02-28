<template>
  <loadingVue :active="isLoading" />
  <div class="container flex-fill pb-5">
    <!-- {{freeDays}} -->
    <h2 class="text-center mb-4">我的放縱日</h2>
    <div class="btn-group">
      <input type="radio" class="btn-check" id="btn-check" name="mode" @click="isSpecificDay = false" :checked="!isSpecificDay">
      <label class="btn btn-outline-primary" :class="{'text-white': !isSpecificDay}" for="btn-check">週期放縱</label>
      <input type="radio" class="btn-check" id="btn-check-2" name="mode" @click="isSpecificDay = true" :checked="isSpecificDay">
      <label class="btn btn-outline-primary" :class="{'text-white': isSpecificDay}" for="btn-check-2">特定放縱</label>
    </div>
    
    <div v-if="!isSpecificDay">
      <div class="row mt-4 g-1">
        <div class="col-auto">
          <h5 class="mb-0 me-4">每週：</h5>
        </div>
        <div class="col-12 col-md">
          <div class="my-2 my-md-0">
            <select class="form-select form-select me-4 w-auto d-inline-block" v-model="select.weekly" :disabled="freeDays.weekly.length >= 7">
              <option value="" selected disabled>請選擇星期</option>
              <option :value="key" v-for="(title, key) in template.weekTitle" :key="'weekly' + key">{{ title }}</option>
            </select>
            <button type="button" class="btn btn-primary mb-1" :disabled="select.weekly === ''" @click="addWeekly(select.weekly)">新增</button>
          </div>
          <p class="my-2">
            <template v-for="(day, key) in freeDays.weekly" :key="'day' + key">
              <span v-if="key">、</span>
              <a href="#" class="link-offset-2" @click.prevent="removeFreeDays('weekly', day)">{{ template.weekTitle[day] }}</a>
            </template>
          </p>
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
          <p class="my-2">
            <template v-for="(day, key) in freeDays.monthly" :key="'day' + key">
              <span v-if="key">、</span>
              <a href="#" class="link-offset-2" @click.prevent="removeFreeDays('monthly', day)">{{ `${day}號` }}</a>
            </template>
          </p>
        </div>
      </div>
      
      <div class="row align-items-center mt-4 g-1">
        <div class="col-auto">
          <h5 class="mb-0 me-4">每年：</h5>
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
        </div>
      </div>
      <ul class="list-group border rounded-0 overflow-y-auto mt-2"
        style="max-height: 250px;">
        <li class="list-group-item" v-for="(day, key) in freeDays.yearly" :key="'year' + key">
          <div class="d-flex align-items-center">
            <p class="mb-0">{{ `${key + 1}.` }}</p>
            <p class="mb-0 mx-2 flex-fill text-center">{{ day }}</p>
            <button type="button" class="btn btn-danger" @click="removeFreeDays('yearly', day)">刪除</button>
          </div>
        </li>
      </ul>
    </div>
    
    <div v-else>
      <div class="mt-5">
        <input type="date" class="form-control me-4 w-auto d-inline-block"
          v-model="select.specific">
        <button type="button" class="btn btn-primary mb-1" :disabled="select.specific === ''"
          @click="addSpecificDay(select.specific)">新增</button>
      </div>
      <ul class="list-group border rounded-0 overflow-y-auto mt-3"
        style="max-height: 250px;">
        <li class="list-group-item" v-for="(day, key) in freeDays.specific" :key="'year' + key">
          <div class="d-flex align-items-center">
            <p class="mb-0">{{ `${key + 1}.` }}</p>
            <p class="mb-0 mx-2 flex-fill text-center">{{ day }}</p>
            <button type="button" class="btn btn-danger" @click="removeFreeDays('specific', day)">刪除</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      isLoading: false,
      isSpecificDay: false,
      template: {
        weekTitle: [
          '日',
          '一',
          '二',
          '三',
          '四',
          '五',
          '六',
        ],
        day: []
      },
      freeDays: {
        weekly: [0, 2],
        monthly: [6, 10, 14],
        yearly: ['03/16', '08/15'],
        specific: ['2024/02/04', '2024/02/06'],
      },
      select: {
        weekly: '',
        monthly: '',
        yearly: {
          month: '',
          day: ''
        },
        specific: ''
      }
    }
  },
  methods: {
    setTemplateDay(month){
      this.select.yearly.day = ''
      this.template.day = new Date(2024, month, 0).getDate()
    },
    setStringFormat(number){
      return number < 10 ? `0${number}` : number
    },
    addWeekly(day){
      const index = this.freeDays.weekly.indexOf(day)
      if(index < 0){
        this.freeDays.weekly.push(day)
        this.freeDays.weekly.sort((a, b) => a - b)
      }
      this.select.weekly = ''
    },
    addMonthly(day){
      const index = this.freeDays.monthly.indexOf(day)
      if(index < 0){
        this.freeDays.monthly.push(day)
        this.freeDays.monthly.sort((a, b) => a - b)
      }
      this.select.monthly = ''
    },
    addYearly({month, day}){
      const date = `${this.setStringFormat(month)}/${this.setStringFormat(day)}`
      const index = this.freeDays.yearly.indexOf(date)
      if(index < 0){
        this.freeDays.yearly.push(date)
        this.freeDays.yearly.sort()
      }
      this.select.yearly.month = ''
      this.select.yearly.day = ''
    },
    addSpecificDay(date){
      date = date.replaceAll('-', '/')
      const index = this.freeDays.specific.indexOf(date)
      if(index < 0){
        this.freeDays.specific.push(date)
        this.freeDays.specific.sort()
      }
      this.select.specific = ''
    },
    removeFreeDays(mode, day){
      const index = this.freeDays[mode].indexOf(day)
      if(index > -1){
        this.freeDays[mode].splice(index, 1)
      }
    },
  },
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
</style>