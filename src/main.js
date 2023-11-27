import App from './App.vue'
import Default from '@/layouts/default/Default.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router } from './router'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import 'bootstrap/dist/js/bootstrap'

const app = createApp(App)

app.component('LayoutDefault', Default)
app.use(createPinia())
app.use(router)

app.mount('#app')
