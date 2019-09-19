import Vue from 'vue'
import App from './App'
import axios from 'axios'
Vue.prototype.$axios=axios
import './font/iconfont.css'
Vue.prototype.$bus=new Vue()  //设置总线
new Vue({
    el:'#app',
    components:{App},
    template:'<App/>'
})