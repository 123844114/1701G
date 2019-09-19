import Vue from 'vue'
import Vuex from "vuex"
Vue.use(Vuex)
import axios from "axios"
export default new Vuex.Store({
    state:{
        listJson:[],
        detailData:{}
    },
    mutations:{},
    getters:{},
    actions:{
        getJson({state}){
            axios.get("/getMovie").then(({data})=>{
                state.listJson = data;
            })
        },
        // 详情
        detailJson({state},id){
            axios.get("/getdetail?id="+id).then(({data})=>{
                state.detailData = data;
            })
        }
    }
})