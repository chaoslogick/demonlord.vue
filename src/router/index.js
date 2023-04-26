import { createWebHistory, createRouter } from 'vue-router';
import MainView from '@/views/MainView.vue';
import PageResume from '@/views/PageResume.vue';
import PageMusic from '@/views/PageMusic.vue';
import PageWarez from '@/views/PageWarez.vue';
import PageEtc from '@/views/PageEtc.vue';
import PageNotFound from '@/views/PageNotFound.vue';

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
  base: import.meta.env.BASE_URL,
  routes
})

export default router;
