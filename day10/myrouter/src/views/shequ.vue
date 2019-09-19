<template>
    <div class="shequ">
        <header>
            <router-link to="/shequ/tuijian" tag='span'>推荐</router-link>
            <router-link to="/shequ/guanzhu" tag='span'>关注</router-link>
        </header>
        <router-view class="main"></router-view>
    </div>
</template>

<script>
export default {
  name:'shequ',
  data(){
    return{
      txt:''
    }
  },
// props:['options','msg'],
// props:{
//   options:{
//     type:Object,
//     // required:true,
//     default:function(){
//       return {name:'tom'}
//     }
//   },
//   mobile:{
//     type:String,
//     validator:function(val){
//       console.log(val)
//      return val.length==4
//     }
//   }
// },
watch:{
    // $route(to,from){
    //     console.log(to)
    // }
    $route:{
        handler:function(to,from){
            console.log(to)
        },
        immediate:true,
        deep:true
    }
},
  beforeCreate() {
    console.log("beforeCreate", 'shequ');
  },
  created() {
    console.log("created", 'shequ');
  },
  beforeMount() {
    console.log("beforeMount", 'shequ');
  },
  mounted() {
    console.log("mounted", 'shequ');
  },
  beforeUpdate() {
    console.log("beforeUpdate", 'shequ');
  },
  updated() {
    console.log("updated", 'shequ');
  },
  beforeDestroy() {
    console.log("beforeDestroy", 'shequ');
  },
  destroyed() {
    console.log("destroyed", 'shequ');
  },
   deactivated() {
    console.log("deactivated", 'shequ');
  },
   activated() {
    console.log("activated", 'shequ');
  }
  // beforeRouteEnter(to, from, next) {
  //   //没有this
  //   console.log("beforeRouteEnter");
  //   next();
  // },
  // beforeRouteUpdate(to, from, next) {
  //   console.log("beforeRouteUpdate", 'shequ');
  //   // 在当前路由改变，但是该组件被复用时调用
  //   // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
  //   // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
  //   // 可以访问组件实例 `this`
  //   next()
  // },
  // beforeRouteLeave(to, from, next) {
  //   console.log("beforeRouteLeave", 'shequ');
  //   // 导航离开该组件的对应路由时调用
  //   // 可以访问组件实例 `this`
  //   next();
  // }
}
</script>

<style scoped>
.shequ{
    background: pink;
    
}
header{
    height: 40px;
        display: flex;
    justify-content: space-around;
    background: #fff
}
.router-link-active{
    color: red
}
</style>
