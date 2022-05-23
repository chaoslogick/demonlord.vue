import { createStore } from 'vuex'

import generic from './modules/generic';

const store = createStore({
  modules: {
    generic
  }
});

export default store;