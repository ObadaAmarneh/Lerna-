export const sortByDateKey = (notifications, key) =>
  notifications.sort(
    (a, b) => new Date(b[key]).getTime() - new Date(a[key]).getTime()
  );
const Layout = {
  namespace: true,
  state: {
    drawer: false,
    tasksDrawer: false,
    notifications:[],
    selectedNotification:[]
  },

  mutations: {
    toggleDrawer(state) {
      state.drawer = !state.drawer;
    },
    drawer(state, val) {
      state.drawer = val;
    },

    toggleTasksDrawer(state) {
      state.tasksDrawer = !state.tasksDrawer;
    },
    tasksDrawer(state,val){
      state.tasksDrawer = val;
    },
    mutateSingleNotification(state, notificationData) {
      const notifications = [notificationData, ...state.notifications];
      state.notifications = sortByDateKey(notifications, "createdAt");
    },
    setSelectedNotification(state, singleNotification) {
      state.selectedNotification = singleNotification;
    },
    removeNotification(state, _id) {
      if (typeof _id == "object") {
        _id.forEach((id) => {
          state.notifications = state.notifications.filter(
            (notifications) => notifications.id !== id
          );
        })
      } else {
        state.notifications = state.notifications.filter(
          (notifications) => notifications.id !== _id
        );
      }
  
    },
  },
  actions: {
    drawer({ commit }, payload) {
      commit("drawer", payload);
    },
    tasksDrawer({ commit }, payload) {
      commit("tasksDrawer", payload);
    },
    setSingleNotification({ commit }, notifications) {
  
      commit("mutateSingleNotification", notifications);
    },
    getNotificationDetails({ commit }, notificationDetail) {
      commit("setSelectedNotification", notificationDetail);
    },
    async deleteNotification({ commit }, id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        confirmButtonText: "Yes, delete it!",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          this.$axios.$put(`/notification-management/delete/${id}`);
          commit("removeNotification", id);
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    },
  },

  getters: {
    drawer(state) {
      return state.drawer;
    },
    tasksDrawer(state) {
      return state.tasksDrawer;
    },
    getSelectedNotification(state) {
      return state.selectedNotification;
    },
  },
};

export default Layout;
