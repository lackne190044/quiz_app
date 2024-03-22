import { compile, createApp } from 'vue'
import 'bootstrap'
import "./scss/custom.scss"

import { createPinia } from 'pinia'

import App from '@/App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
