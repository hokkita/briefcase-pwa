import { createApp } from 'vue'
import App from '@/App.vue'
import '@/assets/css/tailwind.css'
import router from '@/router/index.js';
import { registerSW } from 'virtual:pwa-register'

import Layouts from "@/components/layouts";

const updateSW = registerSW({
    onNeedRefresh() {},
    onOfflineReady() {},
    immediate: true,
  })

const app = createApp(App);

Layouts.registerComponents(app);

app.use(router);
app.mount("#app");