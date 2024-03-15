import { compile, createApp } from 'vue'
import 'bootstrap'

import { createPinia } from 'pinia'

import App from '@/App.vue'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
