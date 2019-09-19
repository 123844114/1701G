import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
let store = new Vuex.Store({
    state:{
        stateDialog:{ //新增状态弹框对象
            visible:false,
            name:'',//新增的状态名称
        },
        taskList:[],//任务列表数据
        stateList:[],//状态列表数据
        changeStateDialog:{
            visible:true
        },
        cardDialog:{
            visible:false
        },
        cardList:[],//小卡片数组
        newState:null,//临时保存新设置的状态数据
        newCardObj:null,//临时保存要改变状态的数据
    },
    getters:{
        
    },
    mutations:{
        //设置cardDialog
        setCardDialog(state,bool){
            state.cardDialog.visible=bool
        },
        setStateVisible(state,bool){
            state.stateDialog.visible=bool
        },
        setTaskList(state,payload){
            state.taskList=payload
        },
        // 设置状态列表
        setStateList(state,data){
            state.stateList=data
        },
        //改变状态
        changeStateFn(state,pp){
            // 1.弹框出现
            state.changeStateDialog.visible=true
            //2、保存将要重新设置状态的对象
            state.newCardObj=pp
        },
        //获取新的状态
        getNewState(state,payload){
            // state.newState=payload
            state.newCardObj.state=payload
            // 然后隐藏弹框
            state.changeStateDialog.visible=false
        }
    },
    actions:{
        /**
         * 新增状态接口
         * @param {*} context 
         * @param {*} payload 输入的name
         */
        addState(context,payload){
            axios.post('/addstate',{title:payload}).then(({data})=>{
                alert(data.msg)
                if(data.code==0){
                    context.commit('setStateVisible',false)
                    context.commit('setStateList',data.data)
                }
            })
        },
        /**
         * 
         * 获取状态列表
         */
        getState({commit}){
            axios.get('/getstate').then(({data})=>{
                commit('setStateList',data)
            })
        },
        /**
         * 获取taskList列表数据 全部
         */
        getTaskList({commit}){
            axios.get('/taskList').then(({data})=>{
                commit('setTaskList',data)
            })
        }
    }
    
})
export default store
