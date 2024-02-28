import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Vue3Toastify, { toast } from 'vue3-toastify';

import App from './App.vue'
import router from './router'

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@/scss/all.scss'
import 'bootstrap-icons/font/bootstrap-icons.css';

import axios from 'axios'
import VueAxios from 'vue-axios'
import LoadingVue from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
import * as VeeValidate from 'vee-validate'
import * as VeeValidateRules from '@vee-validate/rules'
import * as VeeValidateI18n from '@vee-validate/i18n'
import zhTW from '@/assets/VeeValidateI18n/zh_TW.json'

import * as $cookie from '@/utils/cookie'

Object.keys(VeeValidateRules).forEach(rule => {
  VeeValidate.defineRule(rule, VeeValidateRules[rule]);
});
VeeValidate.configure({
  generateMessage: VeeValidateI18n.localize({ zh_TW: zhTW }),
  validateOnInput: true
})
VeeValidateI18n.setLocale('zh_TW')

const app = createApp(App)
app.config.globalProperties.$cookie = $cookie

app.use(Vue3Toastify, {
  autoClose: 1000, //自動關閉時間
  position: toast.POSITION.TOP_CENTER //提示窗位置
})
app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)

app.component('LoadingVue', LoadingVue)
app.component('VForm', VeeValidate.Form)
app.component('VField', VeeValidate.Field)
app.component('ErrorMessage', VeeValidate.ErrorMessage)

app.mount('#app')
