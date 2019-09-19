import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        hotList:[],
        detail:{}
    },
    actions:{
        //热映接口
        getHotList({state}){
            // return new Promise((resolve,reject)=>{
            //     axios.get('/hotlist').then(({data})=>{
            //         // state.hotList=data
            //         resolve(data)
            //     })
            // })
            axios.get('/hotlist').then(({data})=>{
                state.hotList=data
            })
            
        },
        //详情接口
        getDetail({state},id){
            axios.get('/detail?id='+id).then(({data})=>{
                state.detail=data
            })
        }
    }
})