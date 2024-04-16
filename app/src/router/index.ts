import { createRouter, createWebHistory, RouteRecordRaw, createMemoryHistory } from 'vue-router'
import Home from '../components/Jeoparty.vue'

const routes: Array<RouteRecordRaw> = [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/question',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/test',
      name: 'test',
      redirect: '/'
    }
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router
