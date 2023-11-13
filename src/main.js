import { createApp } from 'vue'
import router from '@/router'
import plugins from '@/plugins'

import '@/style.css'
import '@/assets/nprogress.css';

import App from '@/App.vue'

const app = createApp(App)

app
  .use(router)
  .use(plugins)
  .mount('#redesk');
