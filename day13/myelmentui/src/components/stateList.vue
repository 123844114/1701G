/**
*状态列表组件
*/
<template>
    <div class="state-list">
        <!-- <h3>{{options.title}}{{options.state}}</h3> -->
        <!-- 列表小块 小块会出现多个所以是个vfor循环-->
        <!-- <stateItem v-for="(item,index) in cardList" :key="index" :pp="item"/>
        <el-button icon="el-icon-plus" style="width:100%" @click="setCardDialog(true)"></el-button>
        <addCard :op="options.state"/> -->

        <h3>{{options.title}}{{options.state}}</h3>
        <stateItem/>
    </div>
</template>

<script>
import stateItem from './stateList/stateItem'
import addCard from './dialog/addCard'
import {mapState,mapGetters, mapMutations} from 'vuex'
export default {
    props:['options'],
    data(){
        return{
            cardList:[]
        }
    },
    computed:{
        ...mapState(['taskList']),
        // ...mapGetters(['taskList0'])
    },
    components:{stateItem,addCard},
    created(){
    },
    watch:{
        taskList:{
            handler(n,o){
                console.log(n)
        // this.filterCardList(this.options.state)
              this.cardList=  n.filter(item=>item.state==this.options.state)
            },
            deep:true,
            immediate:true
        }
    },
    methods:{
        ...mapMutations(['setCardDialog','filterCardList'])
    }
}
</script>

<style scoped lang="scss">
.state-list{
    width: 25%;
    h3{
        font-size: 12px;
    margin-bottom: 10px;
    margin-left: 10px;
    }
}
</style>
