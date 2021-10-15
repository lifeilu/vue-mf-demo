import Router from 'vue-router';
import Home from './pages/Test.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
];


export default new Router({
  mode: 'history',
  routes,
});
