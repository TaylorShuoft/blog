import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import axios from 'axios';

const app = createApp(App);
app.config.globalProperties.$axios = axios; // 注册 Axios 为全局属性
app.use(router).use(ElementPlus).mount('#app');

// 忽略 ResizeObserver 错误
const resizeObserverLoopErrSilencer = (err) => {
    if (err.message === 'ResizeObserver loop completed with undelivered notifications.') {
      err.stopImmediatePropagation();
    }
  };
  window.addEventListener('error', resizeObserverLoopErrSilencer);
  