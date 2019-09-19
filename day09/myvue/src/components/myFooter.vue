<template>
  <footer>
      <router-link tag="p" :to="item.path" v-for="(item,index) in footerList" :key="index">
          <span :class="['iconfont',item.icon]"></span>
          <span>{{item.name}}</span>
       </router-link>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      footerList: [
        { name: "首页", icon: "icon-shouye", path: "/home" },
        { name: "发现", icon: "icon-faxian", path: "/discover" },
        { name: "订单", icon: "icon-dingdan", path: "/order" },
        { name: "我的", icon: "icon-weidenglu", path: "/my" }
      ]
    };
  }
};
</script>

<style scoped lang='scss'>
footer{
    width: 100%;
    height: 45px;
    // line-height: 45px;
    display: flex;
    justify-content: space-around;
    border-top: 1px solid red;
    p{
        display: flex;
        flex-direction: column;
        text-align: center
        
    }
}
.router-link-active{
    color: #06C1AE
}
</style>
