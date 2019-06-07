const state = {
  status: null,
  inputing: false,
  pay: '',
  orderNumber: ''
}

const mutations = {
  inputing(state, status) {
    state.inputing = true
    state.status = status
    state[status] = ''
  },
  enter(state) {
    state.status = null
    state.inputing = false
  },
  numberInput (state, num) {
    state[state.status] += num
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
