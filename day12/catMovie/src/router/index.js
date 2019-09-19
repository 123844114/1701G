import Vue from 'vue'
import Router from 'vue-router'
// 主页面
import home from '@/views/home'
//一级路由
import movie from "@/views/two/movie"
import movieRoom from "@/views/two/movieRoom"
import my from "@/views/two/my"
const details = ()=> import("@/views/details")
//二级路由
import hot from "@/views/two/three/hot"
import now from "@/views/two/three/now"




Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        redirect: "/home/movie/hot"
    }, {
        path:"/home",
        name:"home",
        component:home,
        meta:{
            title:"猫眼电影"
        },
        children:[{
            //电影
            path:"movie",
            name:"movie",
            component:movie,
            redirect:'/home/movie/hot',
            children:[{
                path:"hot",
                name:"hot",
                component:hot,
                meta:{
                    title:"猫眼电影"
                }
            },{
                path:"now",
                name:"now",
                component:now,
                meta:{
                    title:"猫眼电影"
                }
            }]
        },{
            //影院
            path:"movieRoom",
            name:"movieRoom",
            component:movieRoom,
            meta:{
                title:"影院"
            }
        },{
            //我的
            path:"my",
            name:"my",
            component:my, 
            meta:{
                title:"我的"
            }
        },{
            //详情
            path:"/details/:id",
            name:"details",
            component:details, 
            props:true,
            meta:{
                title:"详情"
            }
        }]
    }]
})