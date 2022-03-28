const Layout = {
  namespace: true,
  state: {
    drawer: true,
    tasksDrawer: true,
  },

  mutations: {
    toggleDrawer(state) {
      state.drawer = !state.drawer;
    },
    drawer(state, val) {
      state.drawer = val;
    },

    tasksDrawerValue(state, val) {
      state.tasksDrawer = val;
    },
  },
  actions: {
    drawer({ commit }, payload) {
      commit("drawer", payload);
    },
  },

  getters: {
    drawer(state) {
      return state.drawer;
    },
  },
};

export default Layout;
