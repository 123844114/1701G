import Vue from 'vue'
import App from './App'
import axios from 'axios'
Vue.prototype.$axios=axios
import store from './store'
import router from './router'
import './font/iconfont.css'
Vue.prototype.$bus=new Vue()  //设置总线
new Vue({
    el:'#app',
    store,
    router,
    components:{App},
    template:'<App/>'
})