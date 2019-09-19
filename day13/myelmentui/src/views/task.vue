<template>
    <div class="task">
        <!-- 列组件 数组循环-->
        <stateList v-for="(item,index) in stateList" :key="index" :options="item"/>
        <el-button>添加</el-button>
    </div>
</template>

<script>
import stateList from '@/components/stateList.vue'
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
export default {
components:{stateList},
computed:{
    ...mapState(['stateList'])
},
created(){
    this.getStateList()
    this.getTaskList()
},
methods:{
//调接口获取状态列
...mapActions(['getStateList','getTaskList'])
}
}
</script>

<style>

</style>
