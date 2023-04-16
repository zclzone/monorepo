import '@/styles/reset.css'
import 'uno.css'
import '@/styles/global.scss'

import { createApp } from 'vue'
import App from './App.vue'
import { useResize } from '@zclzone/utils'

createApp(App).use(useResize).mount('#app')
