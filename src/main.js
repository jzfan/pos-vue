import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import 'buefy/dist/buefy.css';
import router from './router'

axios.defaults.baseURL='http://106.15.35.91:8010/api';
Vue.http = Vue.prototype.$http = axios

Vue.config.productionTip = false

Vue.filter('upcase', (str) => {
	return str.toUpperCase()
})
Vue.filter('yuan2fen', (num) => {
	if (num === 0) {
		return '0'
	}
	num = String(num)
	return num.slice(0, -2) + '.' + num.slice(-2)
})

/* eslint-disable */
new Vue({
    // router,
    render: h => h(App)
}).$mount('#app')

