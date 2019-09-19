//引入路由
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


//配置路由表
import home from '@/views/home'
import my from '@/views/my'
import discover from '@/views/discover'
import order from '@/views/order'
import page404 from '@/views/404'
import detail from '@/views/detail'
import shopcar from '@/views/shopcar'
import login from '@/views/login'
let router= new VueRouter({
  routes:[{
      path:'/',
      redirect:'/home'
  },{
    //每一个路由都是一个对象
    path:'/home',
    name:'home',
    component:home,  //
    meta:{title:'首页'}
  },{
    path:'/my',
    name:'my',
    component:my,
    meta:{title:'我的'}
  },{
    path:'/discover',
    name:'discover',
    component:discover,
    meta:{title:'发现',isRequreCheck:true}
  },{
    path:'/order',
    name:'order',
    component:order,
    meta:{title:'订单',flag:true}
  },{
    //配置动态路由
    path:'/detail/:id',
    name:'detail',
    component:detail,
    meta:{title:'详情'}
  },{
    path:'/shopcar',
    component:shopcar,
    meta:{title:'购物车',isRequreCheck:true},
    // beforeEnter:(to, from, next)=>{
    //   //判断 是否已登陆 判断本地存储里面的username
    //   // to 去哪儿的路由对象
    //   //from  从哪儿来的路由对象
    //   //next 下一个路由
    // if(sessionStorage.username){
    //   next()
    // }else{ //没登陆过
    //   next('/login')
    // }
    // }
  },{//login
    path:'/login',
    component:login,
    meta:{title:'登陆页'}
  },{//404页面
    path:'*',
    component:page404
  }]
})

//配置全局守卫

router.beforeEach((to,from,next)=>{
  // 某几个需要守卫
  if(to.meta.isRequreCheck){
    //需要校验
    if(sessionStorage.username){
        next()
      }else{ //没登陆过
        next('/login')
      }
  }else{
    //不需要校验
    next()
  }
  
})
export default router