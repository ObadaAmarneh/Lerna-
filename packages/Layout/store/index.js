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
import marketingStore from "../../marketing.agentsoncloud.com/store/modules/marketingStore"
import knowledgeBaseStore from "../../knowledgebase.agentsoncloud.com/store/modules/knowledgeBaseStore"
import providerStore from "../../providers.agentsoncloud.com/store/modules/providers"
import {reviews as performanceStore} from "../../performance.agentsoncloud.com/store/modules/reviews"
import incident from "../../incidents.agentsoncloud.com/store/modules/incident";
import impactedIssue from "../../incidents.agentsoncloud.com/store/modules/impactedIsssue";
import attachment from "../../incidents.agentsoncloud.com/store/modules/attachment";
import responder from "../../incidents.agentsoncloud.com/store/modules/responder";
import comment from "../../incidents.agentsoncloud.com/store/modules/comment";
import creator from "../../incidents.agentsoncloud.com/store/modules/creator";
import activityLog from "../../incidents.agentsoncloud.com/store/modules/activityLog";
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
      updateAppointment,
      marketingStore,
      performanceStore,
      knowledgeBaseStore,
      providerStore,
      incident,
      impactedIssue,
      attachment,
      responder,
      comment,
      creator,
      activityLog,

    },
  });
};

export default createStore;
