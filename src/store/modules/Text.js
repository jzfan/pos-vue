import { uuid } from "../../func";
const state = {
    action: null,
    specialFood: {
        name: '',
        price: '',
        qty: ''
    }
}

const mutations = {
    textAction(state, action) {
        state.action = action
    },
    specialName(state, name) {
        state.specialFood.name = name
        state.action = 'special.price'
    },
    specialPrice(state, number) {
        state.specialFood.price = number
        state.action = 'special.qty'
    },
    specialQty(state, number) {
        state.specialFood.qty = number
        state.specialFood.uuid = uuid()
    },
    specialReset(state) {
        state.specialFood = {
            name: '',
            price: '',
            qty: ''
        };
        state.action = null

    }
}

export default {
    state,
    mutations
}
