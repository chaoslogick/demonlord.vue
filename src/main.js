import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import Vue3TouchEvents from 'vue3-touch-events';

const Vue = createApp(App);

Vue.use(router)
   .use(store)
   .use(Vue3TouchEvents)
   .mount('#app');
