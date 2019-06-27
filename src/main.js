import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import store from './store'

axios.defaults.baseURL = 'http://192.168.137.2:4040/api';
// axios.defaults.baseURL='http://106.15.35.91:8010/api';
Vue.http = Vue.prototype.$http = axios

Vue.config.productionTip = false

Vue.filter('upcase', (str) => {
  return str.toUpperCase()
})
Vue.filter('fen2yuan', (num) => {
  if (num === 0) {
    return '0'
  }
  num = String(num)
  return num.slice(0, -2) + '.' + num.slice(-2)
})

Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})

/* eslint-disable */
new Vue({
  store,

  // router,
  render: h => h(App)
}).$mount('#app')

