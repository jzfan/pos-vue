const state = {
  all: [],
  show: [],
  selected: null
}

const mutations = {
  setFoods(state, all) {
    state.all = all
  },
  showFoods(state, cid) {
    let foods = state.all.filter((food) => food.category_id === cid)
    if (foods.length < 18) {
      if (foods.slice(-1)[0].id === state.all.slice(-1)[0].id) {
        foods = [...foods, ...state.all.slice(0, 18 - foods.length)]
      } else {
        let last = foods[foods.length - 1]
        let index = state.all.indexOf(last)
        foods = [...foods, ...state.all.slice(index + 1, index + 19 - foods.length)]
      }
    }
    state.show = foods
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
