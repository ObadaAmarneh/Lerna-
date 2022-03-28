import Vuex from "vuex";
import Notifcations from "./modules/notifications";

const createStore = () => {
  return new Vuex.Store({
    modules: {
      Notifcations,
    },
  });
};

export default createStore;
