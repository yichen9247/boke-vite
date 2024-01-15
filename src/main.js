
import './assets/index.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'element-plus/dist/index.css'
import.meta.glob('../docs/');

import App from './App.vue'
import router from './router'

const app = createApp(App);

app.use(router);
app.use(createPinia());

app.mount('#app');