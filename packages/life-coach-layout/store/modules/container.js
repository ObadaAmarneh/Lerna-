const Container = {
  namespace: true,
  state: {

    data: {}

  },

  mutations: {
    setData: (state, payload = {}) => state.data = payload,
    updateData: (state, payload = {}) => ({ ...state.data, ...payload }),
  },

  actions: {
    getInitialData: async ({ commit }, payload = {}) => {
      const response = await this.$axios.$get(`/url/${payload.url}`);
      commit("setData", response);
    },
    updateData: async ({ commit }, payload = {}) => {
      const response = await this.$axios.$get(`/url/${payload.url}`);
      commit("updateData", response);
    },
  },

  getters: {
    getData(state) {
      return state.data
    },
  },
};

export default Container;
