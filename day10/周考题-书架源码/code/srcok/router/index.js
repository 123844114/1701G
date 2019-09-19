import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
const list = ()=>import('@/views/list.vue')
const detail = ()=>import('@/views/detail.vue')
const my = ()=>import('@/views/my.vue')

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/list'
    },{
      path:'/list',
      name:'list',
      component:list
    },{
      path:'/detail/:id',
      name:'detail',
      component:detail,
      props:true
    },{
      path:'/my',
      name:'my',
      component:my
    }
  ]
})
