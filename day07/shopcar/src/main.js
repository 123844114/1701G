// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload,{
    preLoad: 1.3,
    error: 'dist/error.png',
    loading: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1572555667,2971132550&fm=117&gp=0.jpg',
    attempt: 1
})
/* eslint-disable no-new */
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
//引入icon
import './assets/fonts/iconfont.css'
//全局配置axios
import axios from 'axios'
Vue.prototype.$axios=axios

Vue.use(VueAwesomeSwiper,{
    autoplay:true,
    loop:true
})
new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
})