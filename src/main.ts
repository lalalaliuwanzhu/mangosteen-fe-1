import { createApp } from 'vue'
import { App } from './App'
import { createRouter } from 'vue-router'
import { routes } from './config/routes'
import { history } from './shared/history'

const router = createRouter({ history, routes })// `routes: routes` 的缩写

const app = createApp(App)
app.use(router)
app.mount('#app')
