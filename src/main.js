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

// site ID => b29f50cd-9d3d-49aa-b68f-aaee4a5f209f
