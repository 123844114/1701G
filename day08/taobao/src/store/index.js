import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios';
Vue.use(Vuex)
// import listjson from '@/data/datanew.json'
export default new Vuex.Store({
    state: {
        listjson: [],//存放数据
        shopList: [],//购物车数据
        // totalPrice: 0,
        // totalCount: 0,
        checkAll: true,
        detail:null
    },
    getters: {
        totalPrice(state) {
            //    return  
            return state.shopList.reduce((total, current) => {
                // 求和
                if (current.flag) { //如果打勾了的话
                    total += current.count * current.price
                }
                return total
            }, 0)
        },
        totalCount(state){
            return state.shopList.reduce((total,current)=>{
                if(current.flag){
                    total+=current.count
                }
                return total
            },0)
        }
    },
    mutations: {
        setDetail(state,data){
            state.detail=data
        },
        setListJson(state, data) {
            state.listjson = data
        },
        setShopList(state, data) {
            state.shopList = data
        },
        //加法
        addFn(state, id) {
            let index = state.shopList.findIndex(item => item.id == id)
            if (index !== -1) {
                state.shopList[index].count++
            }
        },
        //减法
        reduceFn(state, id) {
            let index = state.shopList.findIndex(item => item.id == id)
            if (index !== -1) {
                state.shopList[index].count > 0 ? state.shopList[index].count-- : 0
            }
        },
        changeCheckAll(state){
            state.checkAll=!state.checkAll
            //需要联动
            state.shopList.forEach(item=>item.flag=state.checkAll)
        },
        changeCheckOne(state){
            console.log(state.shopList)
            // 联动
           let bool= state.shopList.every(item=>item.flag)
           state.checkAll=bool
        }
    },
    actions: {
        getList({ commit }) {
            Axios.get('/list').then(({ data }) => {
                commit('setListJson', data)
            })
        },
        //点击加入购物车按钮调接口修改flag
        addToShopCar(context, index) {
            Axios.get('/changeFlag?index=' + index).then(({ data }) => {
                console.log(data)
                if (data.code == 0) {
                    alert(data.msg)
                }
            })
        },
        //获取购物车数据
        getShopcarList() {
            Axios.get('/shoplist').then(({ data }) => {
                this.commit('setShopList', data)
            })
        },
        //详情页 id
        getDetail(context,id){
            Axios.get(`/detail?id=${id}`).then(({data})=>{
                context.commit('setDetail',data)
            })
        }
    }
})