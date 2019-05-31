import Vue from 'vue'

const state = {
    all: [],
    selectedUuid: null,
}
const mutations = {
    orderFood(state, item) {
        state.all.push(item)
        state.selectedUuid = item.uuid
        // state.total += parseInt(item.price * 100)
    },
    cancelFood(state) {
        if (state.selectedUuid !== null) {
            let item = state.all.find((obj) => obj.uuid === state.selectedUuid)
            state.all = state.all.filter((obj) => obj.uuid !== state.selectedUuid)
            state.selectedUuid = null
        }
    },
    selectedOrderIndex(state, uuid) {
        state.selectedUuid = uuid
    },
    remarkItem(state, msg) {
        if (state.selectedUuid === null) {
            return false
        }
        let item = state.all.find((obj) => obj.uuid === state.selectedUuid)
        if (item.remark.includes(msg)) {
            return false
        }
        item.remark += (msg + "\n")
    },
    orderQty(state, n) {
        if (state.selectedUuid !== null) {
          let item = state.all.find((obj) => obj.uuid === state.selectedUuid)
          Vue.set(item, 'qty', n)
        }
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