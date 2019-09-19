import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const home =()=>import('@/views/home.vue')
const huoyuan =()=>import('@/views/huoyuan.vue')
const huoyun =()=>import('@/views/huoyun.vue')
const edit =()=>import('@/views/edit.vue')
const add =()=>import('@/views/add.vue')
const detail =()=>import('@/views/detail.vue')
const login =()=>import('@/views/login.vue')
const page404 =()=>import('@/views/404.vue')
export default new Router({
  routes: [
    {
      path: '/',
      component:home,
      name:'home',
      redirect:'/huoyuan',
      children:[
        {
          path:'huoyuan',
          name:'huoyuan',
          component:huoyuan
        },{
          path:'huoyun',
          name:'huoyun',
          component:huoyun
        },{
          path:'edit',
          component:edit
        },{
          path:'add',
          component:add,
          beforeEnter(to,from,next){
            if(localStorage.user){
              next()
            }else{
              next('/login')
            }
          }
        },{
          path:'/detail/:index',
          component:detail
        }
      ]
    },{
      path:'/login',
      component:login
    },
    {
      path:'*',
      component:page404
    }
   
  ]
})
