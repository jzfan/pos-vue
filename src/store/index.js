import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'
import Calc from './modules/Calc'
import Category from './modules/Category'
import Food from './modules/Food'
import Order from './modules/Order'
import Text from './modules/Text'

Vue.use(Vuex)

/* eslint-disable no-new */
const store = new Vuex.Store({
  // plugins: [createPersistedState()],
  modules: {
    Calc, Category, Food, Order, Text
  }
})

export default store
