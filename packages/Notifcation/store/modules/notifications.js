
export const sortByDateKey = (notifications, key) =>
notifications.sort(
  (a, b) => new Date(b[key]).getTime() - new Date(a[key]).getTime()
);
export const sortByDateKeySenders = (sentNotifications, key) =>
sentNotifications.sort(
  (a, b) => new Date(b[key]).getTime() - new Date(a[key]).getTime()
);
import Swal from "sweetalert2";
  
const Notifcations = {
  namespace: true,
  state: {
    notifications: [],
    movedSettings: [],
    tasksDrawer: false,
    setNotifications: [],
    selectedNotification: [],
    showForm: false,
    dialog: false,
    sentNotifications: [],
    deletedNotifications: [],
    messages: 0,
    checked: [],
    settingsAlert: false,
    drawer: false,
  },

  mutations: {
    storeMovedSettings(state, payload) {

      state.movedSettings = [payload, ...state.movedSettings];
    },
    showSettingsAlert(state) {
      state.settingsAlert = true
    },
    updateSelected(state, payload) {
      console.log("reaced m here is the payload ???????????????????", payload);
      state.checked = [...state.checked, payload];
    },
    restChecked(state) {
      state.checked = []
    },
    setNotificationCounter(state) {
      state.messages += 1
    },
    updateNotificationCounter(state) {
      state.messages = 0
    },
    SetDeletedNotifications(state, deletedNotification) {
      state.deletedNotifications = deletedNotification
    },
    setNotifications(state, notificationData) {
      state.notifications = sortByDateKey(notificationData, "createdAt");
    },
    setSentNotifications(state, notificationData) {
      state.sentNotifications = notificationData;
    },
    setDialog(state) {
      state.dialog = true;
      console.log("set dilog gets clled", state.dialog);
    },
    mutateFormFlag(state) {
      state.showForm = !state.showForm;
    },
    mutateSingleNotification(state, notificationData) {
      const notifications = [notificationData, ...state.notifications];
      state.notifications = sortByDateKey(notifications, "createdAt");
    },
    setSelectedNotification(state, singleNotification) {
      state.selectedNotification = singleNotification;
    },
    removeNotification(state, _id) {
      console.log("here is the type", typeof _id);
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
    updateFlag(state, _id) {
      state.notifications = state.notifications.filter(
        (notifications) => notifications.id !== _id
      );
    },
  },
  actions: {
    getNotifications({ commit }) {
      //hit the api here
  
        this.$axios.$get("/notification-management/notifications").then((notification) => {
  
          console.log(notification);
           commit("setNotifications", notification);
        });
  
  
  
  
    },
    createNotification({ commit }, notificationObject) {
  
      this.$axios.$post("/notification-management/notifications/create", notificationObject)
        .then((result) => {
          Swal.fire({
            position: "centered",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          console.log("Rersult>>>>>>>>>>>>>>>>>>>>>", result);
        })
        .catch((err) => {
          Swal.fire({
            position: "centered",
            icon: "error",
            title: "There is an error in Creating a new notification",
            showConfirmButton: false,
  
            timer: 3000,
          });
          console.log("err>>>>>>>>>>>>>>>>>>>>", err);
        });
    },
    getNotificationDetails({ commit }, notificationDetail) {
      console.log("ana", notificationDetail);
      commit("setSelectedNotification", notificationDetail);
    },
    getAllDeletedNotifications({ commit }) {
      console.log("getAllDeletedNotifications fired");
      // get the sender id from CAIM 
      this.$axios.$post("notification-management/notifications/deleted", { sender_id: 3 }).then((notifications) => {
        commit("SetDeletedNotifications", notifications);
      });
    },
    async deleteNotification({ commit }, id) {
      console.log("fired", id);
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
          console.log("after confiremd", id);
          this.$axios.$put(`http://localhost:3500/notifications/delete/${id}`);
          commit("removeNotification", id);
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    },
    getNotificationBySenderId({ commit }) {
      // get the user id from CAIM
      this.$axios.$get("/notification-management/notifications/senders/3")
        .then((notification) => {
          commit("setSentNotifications", notification);
          console.log("get notifcaiton by id ", notification);
        });
    },
    async setFlag({ commit }, id) {
      await this.$axios.put(`/notification-management/notifications/updateFlag/${id}`);
      commit("updateFlag", id);
    },
    setNotification({ commit }, notifications) {
      commit("setNotifications", notifications);
    },
    setSingleNotification({ commit }, notifications) {
      console.log("sat single notification");
  
      commit("mutateSingleNotification", notifications);
    },
    setFormFlag({ commit }) {
      commit("mutateFormFlag");
    },
  },

  getters: {
    getSelectedNotification(state){
return state.selectedNotification
    },
    getMovedSettings(state) {
      return state.movedSettings
    },
    getSettingsAlert(state) {
      return state.settingsAlert
    },
    getCheckedNotifications(state) {
      return state.checked
    },
    getNumberOfNotification(state) {
      return state.messages
    },
    getAllDeletedNotifications(state) {
      return state.deletedNotifications
    },
    getDialog(state) {
      console.log("set dilog gets clled from getters", state.dialog);
  
      return state.dialog;
    },
    getAllNotifications(state) {
      return state.notifications;
    },
    getNotificationBySenderId(state) {
      return state.sentNotifications;
    },
    // getMorityId: (state) =>(id)=>{
    //   return state.products.find(product => product.id == id)
    // }
    getSelectedNotification(state) {
      return state.selectedNotification;
    },
    getFormFlag(state) {
      return state.formFlag;
    },
  },
};

export default Notifcations;
