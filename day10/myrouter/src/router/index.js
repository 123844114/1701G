import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import home from '@/views/home.vue'
import shequ from '@/views/shequ.vue'
import detail from '@/views/detail.vue'
import tuijian from '@/views/shequ/tuijian.vue'
import guanzhu from '@/views/shequ/guanzhu.vue'
import login from '@/views/login.vue'
export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      meta:{index:1}
    },
    // {
    //   path: '/detail/:id',
    //   name: 'detail',
    //   component: detail,
    //   props:true,//开放props
    // },
    {
      path: '/detail',
      name: 'detail',
      component: detail,
      meta:{index:2}
    },
    {
      path: '/shequ',
      name: 'shequ',
      component: shequ,
      redirect:'/shequ/tuijian',//重定向
      meta:{index:3},
      beforeEnter(to,from,next){
        if(localStorage.user){
          next()
        }else{
          next('/login')
        }
      },
      children:[
        {
          path: 'tuijian',
          name: 'tuijian',
          component: tuijian
        },
        {
          path: 'guanzhu',
          name: 'guanzhu',
          component: guanzhu
        }
      ]
    },
    {
      path:'/login',
      component:login
    }
  ]
})
