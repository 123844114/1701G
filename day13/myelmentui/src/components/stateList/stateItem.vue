/**
*状态列表组件--内容小块组件
*/
<template>
  <div class="state-item" @click="isShow=true">
    小人物卡
    <!-- <el-card shadow="always" :class="pp.level">
      <p>{{pp.title}}</p>
    </el-card>
    <div v-if="isShow">
      <p v-for="(item,index) in stateList" :key="index" @click="pp.state=item.state">{{item.title}}</p>
    </div> -->
  </div>
</template>

<script>
import changeState from '@/components/dialog/changeState'
import { mapMutations,mapState } from 'vuex';
export default {
  props:['pp'],
  data(){
    return{
      isShow:false
    }
  },
  computed:{
    ...mapState(['stateList']),
  },
  components:{changeState},
  methods:{
    ...mapMutations(['changeStateFn','getNewState'])
  }
};
</script>

<style scoped lang="scss">
.warning{
  border-left: 5px solid red;
}
.normal{
  border-left: 5px solid green;
}
</style>
