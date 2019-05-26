const state = {
  receiving: false
}

const mutations = {
  receive_inputing (state) {
    state.receiving = true
  },
  received (state) {
    state.receiving = false
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
