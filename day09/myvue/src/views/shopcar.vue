<template>
  <div class="shopcar">
    <!-- {{data}}  -->
    <h2>{{data.name}}</h2>
    <div class="con">
      <p>
        <span>单价:</span>
        <span>{{data.avgPrice}}</span>
      </p>
      <div>
        <span>数量:</span>
        <p>
          <span class="btn" @click="data.count>0?data.count--:0">-</span>
          <span class="btn1">{{data.count}}</span>
          <span class="btn" @click="data.count++">+</span>
        </p>
      </div>
      <p>
        <span>总价:</span>
        <span>{{data.avgPrice*data.count}}</span>
      </p>
    </div>
    <div class="con">
      <p>评价内容：</p>
      <textarea v-model="content" cols="30" rows="10"></textarea>
    </div>
    <p style="background:#fff"><button @click="submit">提交</button></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "hello",
      data: {},
      content:'',
    };
  },
  beforeCreate() {
    console.log("beforeCreate", this.msg);
  },
  created() {
    console.log("created", this.msg);
    //获取数据
    this.$bus.$on("myEvent", data => {
      this.data = data;
      console.log(data);
    });
  },
  methods:{
    /**
    * 变个数
    *评论添加上
     */
    submit(){
      // 准备数据
      let id=this.data.id
      let count=this.data.count
      let content=this.content
      let name=sessionStorage.username
      this.$axios.post('/setData',{
        id,count,content,name
      }).then((data)=>{
        console.log(data)
      })
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
    console.log("beforeDestroy", this.msg);
  },
  destroyed() {
    console.log("destroyed", this.msg);
  },
  beforeRouteEnter(to, from, next) {
    //没有this
    console.log("beforeRouteEnter");
    next();
  },
  beforeRouteUpdate(to, from, next) {
    console.log("beforeRouteUpdate", this.msg);
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  beforeRouteLeave(to, from, next) {
    console.log("beforeRouteLeave", this.msg);
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    next();
  }
};
</script>

<style scoped lang='scss'>
.shopcar {
  background: #eee;
  h2 {
    margin-bottom: 20px;
  }
  .con {
    background: #fff;
    padding: 10px 0;
    p,div {
      padding: 0 10px;
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      p {
        margin-bottom: 0;
      }
    }
  }
}
.btn {
  padding: 3px 10px;
  border: 1px solid #06c1ae;
}
.btn1 {
  padding: 3px 20px;
  border: 1px solid #b3aeaeee;
  margin: 0 10px;
}
</style>
