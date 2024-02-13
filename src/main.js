import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


import '@/scss/all.scss'

import * as VeeValidate from 'vee-validate'
import * as VeeValidateRules from '@vee-validate/rules'
import * as VeeValidateI18n from '@vee-validate/i18n'
import zhTW from '@/assets/VeeValidateI18n/zh_TW.json'

Object.keys(VeeValidateRules).forEach(rule => {
  VeeValidate.defineRule(rule, VeeValidateRules[rule]);
});
VeeValidate.configure({
  generateMessage: VeeValidateI18n.localize({ zh_TW: zhTW }),
  validateOnInput: true
})
VeeValidateI18n.setLocale('zh_TW')

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('VForm', VeeValidate.Form)
app.component('VField', VeeValidate.Field)
app.component('ErrorMessage', VeeValidate.ErrorMessage)

app.mount('#app')
