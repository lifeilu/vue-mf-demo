//@ts-ignore
import { createRouter, createWebHistory } from 'vue-router';
import Main from './pages/main.vue';
import Test from './pages/test.vue';

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
  },
  {
    path: '/test',
    name: 'Test',
    component: Test,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
