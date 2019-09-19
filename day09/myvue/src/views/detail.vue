<template>
  <!-- <h1>详情页{{$route.params.id}}</h1> -->
  <div class="detail">
    <div class="de-top">
        <h3>{{detailData.name}}</h3>
      <img :src="detailData.frontImg" alt style="width:100%">
      <button class="btn" @click="makeOrder">立即抢购</button>
    </div>
    <div class="d-pinglun">
      <h1>评论区</h1>
      <PingLun v-for="(item,index) in detailData.evaluate" :key="index" :options="item"/>
    </div>
  </div>
</template>

<script>
import PingLun from "@/components/PingLun";
export default {
  data() {
    return {
      detailData: {},
      msg: "hello"
    };
  },
  components: {
    PingLun
  },
  beforeCreate() {
    console.log("beforeCreate", this.msg);
  },
  created() {
    console.log("created", this.msg);
    let id = this.$route.params.id;
    // 根据id调接口
    // this.$axios.get('/detail',{params:id})
    this.$axios.get("/detail?id=" + id).then(({ data }) => {
      console.log(data);
      this.detailData = data;
    });
  },
  methods:{
    makeOrder(){
      this.$router.push('/shopcar')
    }
  },
  beforeMount() {
    console.log("beforeMount", this.msg);
  },
  mounted() {
    console.log("mounted", this.msg);
  },
  beforeUpdate() {
    console.log("beforeUpdate", this.msg);
  },
  updated() {
    console.log("updated", this.msg);
  },
  beforeDestroy() {
    this.$bus.$emit('myEvent',this.detailData)
    console.log("beforeDestroy", this.msg);
  },
  destroyed() {
    console.log("destroyed", this.msg);
  },
  beforeRouteEnter(to, from, next) {
      //没有this
    console.log("beforeRouteEnter");
    next()
  },
  beforeRouteUpdate(to, from, next) {
    console.log("beforeRouteUpdate", this.msg);
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    next()
  },
  beforeRouteLeave(to, from, next) {
    console.log("beforeRouteLeave", this.msg);
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    next()
  }
};
</script>

<style scoped lang='scss'>
.de-top {
  height: 200px;
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
}
.btn {
  position: absolute;
  background: #f3b308;
  padding: 10px 20px;
  border: 0;
  font-size: 20px;
  color: #fff;
  bottom: 0;
  right: 0px;
}
</style>
