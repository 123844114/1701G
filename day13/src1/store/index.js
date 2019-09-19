import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
let store = new Vuex.Store({
    state:{
        list:[],
        key:'',
        detail:{},//详情页的数据
    },
    getters:{
    },
    mutations:{ //同步方法
        setKey(state,key){
            state.key=key
        },
        // getDetail(state,index){
        //    state.detail= state.list[index]
        // },
        setList(state,data){
            state.list=data
        },
        setDetail(state,data){
            state.detail=data
        }
    },
    actions:{
        // 列表接口
        getList({state,commit}){
            // console.log(this)
            axios.get('/list').then(({data})=>{
                // state.list=data
                commit('setList',data)
            })
        },
        addList({state},data){
            console.log(data)
            axios.post('/add',{data:data}).then(({data})=>{
                console.log(data)
            })
        },
        getDetailData({state,commit},id){
            axios.get('/detail?id='+id).then(({data})=>{
                commit('setDetail',data)
            })
        },
        //搜索
        searchFn({commit},key){
            axios.get('/search?key='+key).then(({data})=>{
                console.log(data)   //匹配项
                commit('setList',data)
             })
        }
    }
})
export default store
