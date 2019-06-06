const state = {
  status: null,
}

const mutations = {
  receive_inputing (state) {
    state.status = 'pay'
  },
  enter (state) {
    state.status = null
  },
  inputSpecial(state) {
    state.status = 'special'
  },
  orderNumberInput(state) {
    state.status = 'orderNumber'
  }
}

// const actions = {
//   someAsyncTask ({ commit }) {
//     // do something async
//     commit('INCREMENT_MAIN_COUNTER')
//   }
// }

export default {
  state,
  mutations,
  // actions
}
