import Vue from 'vue'
import Vuex from 'vuex'
import numSeparator from './store/modules/numSeparator'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    numSeparator
  }
})

export default store
