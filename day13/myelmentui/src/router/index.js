import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = () => import('@/views/login.vue')
const page404 = () => import('@/views/404.vue')
const home = () => import('@/views/home.vue')
const task = () => import('@/views/task.vue')
export default new Router({
  routes: [
    {
      path: '/',
      component: home,
      redirect:'/task',
      children: [
        {
          path: '/task',
          component: task
        },
        {
          path: '/share',
          component: task
        },
        {
          path: '/file',
          component: task
        },{
          path:'/schedule',
          component:task
        }
      ]
    }, {
      path: '/login',
      component: login
    },
    {
      path: '*',
      component: page404
    }

  ]
})
