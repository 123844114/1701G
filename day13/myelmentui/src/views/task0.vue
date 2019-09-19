<template>
  <div class="task">
    <!-- 一列的信息展示  因为会是多列，所以是个vfor循环 -->
    <stateList v-for="(item,index) in stateList" :key="index" :options='item'/>
    <el-button class="addBtn" @click='setStateVisible(true)'>添加状态</el-button>
    <stateDialog/>
  </div>
</template>

<script>
import stateList from "@/components/stateList";
import stateDialog from '@/components/dialog/stateDialog'
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
export default {
  components: { stateList,stateDialog },
  computed:{
    ...mapState(['stateList'])
  },
  created(){
    this.getState()
    this.getTaskList()
  },
  methods:{
    ...mapMutations(['setStateVisible']),
    ...mapActions(['getState','getTaskList'])
  }
};
</script>

<style scoped lang='scss'>
.task {
  display: flex;
  .addBtn {
    height: 34px;
    line-height: 10px;
    width: 200px;
  }
  // justify-content: space-between;
}
</style>
