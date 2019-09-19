import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const list = ()=>import('@/views/list.vue')
const detail = ()=>import('@/views/detail.vue')
const shopcar = ()=>import('@/views/shopcar.vue')
const page404 = ()=>import('@/views/404.vue')
const home =()=>import('@/views/home.vue')
const login =()=>import('@/views/login.vue')
export default new Router({
    routes: [
        {
            path: '/',
            component:home,
            redirect:'/list',
            children:[
                {
                    path:'/list',
                    component:list,
                    meta:{title:'列表页'}
                },
                {
                    path:'/detail/:id',
                    props:true,
                    component:detail,
                    name:'detail',
                    meta:{title:'详情页'},
                    // children:[{},{}]
                },
                {
                    path:'/shopcar',
                    component:shopcar,
                    meta:{title:'购物车'},
                    beforeEnter(to,from,next){
                        if(localStorage.user){
                            next()
                        }else{
                            next('/login')
                        }
                    }
                }
            ]
        },
        {
            path:'/login',
            component:login
        },
        {
            path:'*',
            component:page404
        }

    ]
})
