import '@/styles/common.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useIntersectionObserver } from '@vueuse/core'
import {lazyPlugin} from "@/directives";
import App from './App.vue'
import router from './router'
import { componentPlugin } from './components';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const app = createApp(App)

const pinia = createPinia()
app.use(pinia)
pinia.use(piniaPluginPersistedstate)
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)

app.mount('#app')
