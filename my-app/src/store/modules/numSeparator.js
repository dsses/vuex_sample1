
// initial state
const state = function() {
  return {
    from: '',
    to: '',
  }
}

// getters
const getters = {
  from: state => state.from,
  to: state => state.to,
  separatedNum: state => {
    if (state.from !== '' && state.to !== '') {
      let ar = []
      for (let i = state.from; i <= state.to; i++) {
        ar.push(i)
      }
      return ar.join()
    }
  }
}

// actions
const actions = {
  updateFrom({ commit }, value) {
    commit('updateFrom', value)
  },
  updateTo({ commit }, value) {
    commit('updateTo', value)
  }
}

// mutations
const mutations = {
  updateFrom (state, val) {
    state.from = parseInt(val, 10)
    if (isNaN(state.from)) {
      state.from = ''
    }
  },
  updateTo (state, val) {
    state.to = parseInt(val, 10)
    if (isNaN(state.to)) {
      state.to = ''
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
