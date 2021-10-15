import '@babel/polyfill';
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import App from './App.vue';
import router from './router';
Vue.use(VueRouter);
Vue.use(Vuex);

Vue.use(VueI18n);

const app = new Vue({
  el: '#app',
  router,
  ...App,
});

export default app;