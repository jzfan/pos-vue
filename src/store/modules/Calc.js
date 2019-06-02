const state = {
  receiving: false,
  special: false
}

const mutations = {
  receive_inputing (state) {
    state.receiving = true
  },
  received (state) {
    state.receiving = false
  },
  inputSpecial(state) {
    state.special = true
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
