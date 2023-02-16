import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import VueVideoPlayer from '@videojs-player/vue'
import 'video.js/dist/video-js.css'


import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueVideoPlayer)

app.mount('#app')

// site ID => 4b801ae5-13f2-4882-8a71-ae3601316d30
