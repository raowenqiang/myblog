import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App);
//Element

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// import axios from 'axios';
// app.config.globalProperties.$axios=axios;
app.use(ElementPlus);

import router from './router';
app.use(router);

//启动
app.mount('#app');


