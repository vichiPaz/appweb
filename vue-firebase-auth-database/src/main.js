import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import DefaultLayout from './layouts/DefaultLayout.vue'

import './assets/main.css'

const app = createApp(App)

app.component('DefaultLayout', DefaultLayout)

app.use(store)
app.use(router)

app.mount('#app')