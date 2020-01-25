import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import user from './modules/user'
import profile from './modules/profile'

const store = () => new Vuex.Store({
  namespaced: true,
  modules: {
    user,
    profile
  },
}
)

export default store
