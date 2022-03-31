import Vuex from "vuex";
import Container from "./modules/container";
import Marketing from "../../Marketing/store";
import { reviews } from "../../performance.agentsoncloud.com/store/modules/reviews";
const createStore = () => {
  return new Vuex.Store({
    modules: {
      Container,
      Marketing,
      reviews
    },
  });
};

export default createStore;
