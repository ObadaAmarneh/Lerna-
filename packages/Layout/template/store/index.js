import Vuex from "vuex";
import Layout from "./modules/mainLayout";
import Notifications from "../../../Notifcation/store/modules/notifications";

const createStore = () => {
  return new Vuex.Store({
    modules: {
      Layout,
      Notifications,
    },
  });
};

export default createStore;
