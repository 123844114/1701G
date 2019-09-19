import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
Vue.config.productionTip = false
import axios from 'axios'
Vue.prototype.$axios=axios
import './assets/font/iconfont.css'
/* eslint-disable no-new */
window.vm = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
