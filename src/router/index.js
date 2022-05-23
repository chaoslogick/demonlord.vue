import { createWebHistory, createRouter } from 'vue-router';
import MainView from '@/views/MainView.vue';
import PageResume from '@/views/PageResume';
import PageMusic from '@/views/PageMusic';
import PageWarez from '@/views/PageWarez';
import PageEtc from '@/views/PageEtc';
import PageNotFound from '@/views/PageNotFound';

const routes = [
  {
    path: '/',
    name: 'page-main',
    component: MainView,
  },
  {
    path: '/resume',
    name: 'page-resume',
    component: PageResume,
  },
  {
    path: '/music',
    name: 'page-music',
    component: PageMusic,
  },
  {
    path: '/warez',
    name: 'page-warez',
    component: PageWarez,
  },
  {
    path: '/etc',
    name: 'page-etc',
    component: PageEtc,
  },
  {
    path: '/:catchAll(.*)',
    name: 'page-not-found',
    component: PageNotFound
  },
]

const router = createRouter({
  hashbang: false,
  history: createWebHistory(),
  linkActiveClass: 'active',
  root: '/',
  base: process.env.BASE_URL,
  routes
})

export default router;
