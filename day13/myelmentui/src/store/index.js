import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
let store = new Vuex.Store({
    state:{
        stateList:[],//存放状态列
        taskList:[]
    },
    mutations:{
        //设置状态列
        setStateList(state,data){
            state.stateList=data
        },
        setTaskList(state,data){
            state.taskList=data
        }
    },
    actions:{
       getStateList({commit}){
           axios.get('/getstate').then(({data})=>{
                // state.stateList=data
                commit('setStateList',data)
           })
       },
       getTaskList({commit}){
           axios.get('/taskList').then(({data})=>{
            commit('setTaskList',data)
           })
       }
    }
})
export default store