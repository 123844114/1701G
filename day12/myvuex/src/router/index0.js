import Vue from 'vue'
import Router from 'vue-router'

const home = () => import('@/views/movieHome')
const movie = () => import('@/views/home/movie')
const cinema = () => import('@/views/home/cinema')
const my = () => import('@/views/home/my')
const hot = () => import('@/views/movie/hot')
const show = () => import('@/views/movie/show')
const detail = () => import('@/views/detail')
const login = () => import('@/views/login')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home/movie/hot'
    }, {
      path: '/home',
      component: home,
      children: [
        {
          path: 'movie',
          component: movie,
          redirect:'/home/movie/hot',
         
          children: [
            {
              path: 'hot',
              component: hot,
              meta:{title:'猫眼电影'},
            },
            {
              path: 'show',
              component: show,
              meta:{title:'猫眼电影'},
            }
          ]
        },
        { path: 'cinema', component: cinema,meta:{title:'影院'} },
        { path: 'my', component: my ,meta:{title:'我的'},}
      ]
    }, {
      path: '/detail/:id',
      component: detail,
      props:true
    }, {
      path: '/login',
      component: login
    }
  ]
})
