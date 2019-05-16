import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import 'buefy/dist/buefy.css';
import router from './router'

Vue.prototype.axios = axios;

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')