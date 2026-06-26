import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import ToastService from 'primevue/toastservice'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import App from './App.vue'
import router from './router/index.js'

import './styles/global.css'
import 'primeicons/primeicons.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'element-plus/dist/index.css'

const app = createApp(App)

// Register Element Plus icons globally
for (const [name, comp] of Object.entries(ElementPlusIconsVue)) {
  app.component(name, comp)
}

app
  .use(createPinia())
  .use(router)
  .use(PrimeVue, { theme: { preset: Aura } })
  .use(ToastService)
  .use(ElementPlus)
  .mount('#app')
