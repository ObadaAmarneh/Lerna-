
import Vuex from 'vuex'
import notificationsStore from './modules/notificationsStore'

  const createStore = () => {
    return new Vuex.Store({
      modules: {
        notificationsStore,
      },
    })
  }


  export default createStore