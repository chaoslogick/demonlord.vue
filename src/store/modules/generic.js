export default {
  state: {
    total: 0
  },
  mutations: {
    updateTotal(state, data) {
      state.total = Object.freeze(data);
    }
  },
  getters: {
    getTotal: (state) => {
      return state.total;
    }
  }
}