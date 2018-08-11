import Vue from 'vue'
import Vuex from 'vuex'
import numSeparator from './store/modules/numSeparator'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    moduleA: numSeparator,
    moduleB: numSeparator
  }
})

export default store
