import Vuex from "vuex";
import Layout from "./modules/mainLayout";
import Notifications from "../../notifications.agentsoncloud.com/store/modules/notifications";
import allConsumers from "../../consumers.agentsoncloud.com/store/modules/allConsumers";
import blackListManegment from "../../consumers.agentsoncloud.com/store/modules/blackListManegment";
import serviceProviders from "../../consumers.agentsoncloud.com/store/modules/serviceProviders";
import services from "../../consumers.agentsoncloud.com/store/modules/services";
import inventory from '../../inventory.agentsoncloud.com/store/modules/inventory';
import createAppointment from '../../clinic.management.agentsoncloud.com/store/modules/createappointment'
import updateAppointment from '../../clinic.management.agentsoncloud.com/store/modules/updateappointment'

const createStore = () => {
  return new Vuex.Store({
    modules: {
      Layout,
      Notifications,
      allConsumers,
      services,
      serviceProviders,
      blackListManegment,
      inventory,
      createAppointment,
      updateAppointment

    },
  });
};

export default createStore;
