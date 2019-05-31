const state = {
  all: [],
  selected: null
}

const mutations = {
  setCategories (state, all) {
    state.all = all
  },
  selectCategory (state, obj) {
    state.selected = obj
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
