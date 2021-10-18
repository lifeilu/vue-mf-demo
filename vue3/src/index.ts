// TEST CODE
// import './model/loader';

// import contextmenu from './vendor/contextMenu/index';
import Antd from 'ant-design-vue';
import ElementPlus from 'element-plus';
import locale from 'element-plus/lib/locale/lang/zh-cn';
import { createApp } from 'vue3';
import App from './App.vue';
import router from './router';

createApp(App)
  .use(router)
  .use(ElementPlus, { locale })
  .use(Antd)
  // .use(contextmenu)
  .mount('#app');
