import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const home = ()=>import('@/views/home')
const detail = ()=>import('@/views/detail')
// import home from '@/views/home'
// import detail from '@/views/detail'
export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },{
      path:'/home',
      name:'home',
      component:home
    },{
      path:'/detail/:id',
      name:'detail',
      component:detail,
      props:true
    }
  ]
})
