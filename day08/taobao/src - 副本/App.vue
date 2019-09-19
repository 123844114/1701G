<template>
  <div class="main">
    <myHeader>
      <template v-slot:left><span class="iconfont icon-shoucang"></span></template>
      <span style='clolor'>面试列表</span>
      <span class="iconfont icon-bofang" slot='right'></span>
    </myHeader>
    <div class="content">
      <div class="tabBar">
      <span v-for="(item,index) in tabBar" :key="index" :class="{acitve:currentIndex===index}" @click="tabFn(index,item.type)">{{item.name}}</span>
    </div>
    <div class="tablist">
      <template v-if="even(currentType).length">
         <myItem  v-for="(item,index) in even(currentType)" :key="index" :options="item" ></myItem>
      </template>
     
      <div v-else>暂无数据</div>
    </div>
    </div>
    <myFooter class="footer"></myFooter>
  </div>
</template>

<script>
import "./font/iconfont.css";
import myItem from "./components/myItem";
import myHeader from "./components/myHeader";
import myFooter from "./components/myFooter.vue";
// import dataJson from './data/data.json'
export default {
  data() {
    return {
      dataJson:[],
      currentType:0,
      tabList:[],
        currentIndex:0,
      tabBar: [
        { name: "未开始", type: 0 },
        { name: "已打卡", type: 1 },
        { name: "已放弃", type: 2 },
        { name: "全部", type: 3 }
      ]
    }
  },
  components: { myItem,myHeader,myFooter },
  methods:{
      tabFn(index,type){
          this.currentIndex=index
          this.currentType=type
      },
      even(type){
        if(type!==3){
          return this.dataJson.filter(item=>item.type===type)
        }else{
          return this.dataJson
        }
      }
  },
  created(){
    this.$axios.get('/list').then(({data})=>{
      this.dataJson=data
      this.tabList=this.dataJson.filter(item=>item.type===0)
    })
  }
};
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #EEEEEE;
  header {
    height: 40px;
    line-height: 40px;
    text-align: center;
        background: #fff;
    border-bottom: 1px solid #d2d0d0;
  }
  .content{
    flex:1;
    overflow-y:auto ;
  }
  .tabBar {
    height: 40px;
    line-height: 40px;
    display: flex;
    justify-content: space-between;
    background: #fff;
    margin-bottom: 10px;
    span{
        flex: 1;
        text-align: center
    }
    .acitve{
        color: #4A86BF
    }
  }
}
</style>
