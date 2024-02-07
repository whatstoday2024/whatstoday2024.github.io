import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // 引入 Bootstrap 的 JavaScript 文件
import '@/scss/all.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
