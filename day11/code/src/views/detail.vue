<template>
  <div class="detail">
    <header>
      <span class="arrow"><</span>
      <span>科一模拟考试</span>
    </header>
    <Question class="main" :options="dataList[id]"/>
    <Dfooter class="footer" :length='dataList.length'/>
  </div>
</template>

<script>
import Dfooter from '@/components/detail/Dfooter'
import Question from '@/components/detail/Question'
export default {
  props:['dataList','id'],
  components:{Dfooter,Question},
  created(){
    localStorage.start = new Date().getTime()
  }
};
</script>

<style scoped lang='scss'>
.detail {
  height: 100%;
  display: flex;
  flex-direction: column;
  header {
    height: 40px;
    line-height: 40px;
    background: #0287d2;
    color: #fff;
    text-align: center;
    .arrow {
      float: left;
      width: 25px;
      cursor: pointer;
    }
  }
  .main{
    flex: 1;
    overflow: hidden;
    background: #eee;
  }
  .footer{
    height:60px;
  }
}
</style>
