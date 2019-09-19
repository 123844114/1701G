<template>
  <!-- <h1>{{opt}}</h1> -->
  <button class="btn btn-my" @click="addToMe" :class="{disable:disable}">加入书架</button>
  <!-- <button class="btn btn-my" @click="addToMe" >加入书架</button> -->
</template>

<script>
export default {
  props: ["opt"],
  data() {
    return {
      disable: null
    };
  },
  watch: {
    opt: {
      handler(n, o) {
        console.log(n);
        let list = localStorage.list ? JSON.parse(localStorage.list) : {};
        let id = n.id;
        let data = list[id] ? list[id].buy_mode : n.buy_mode;
        this.disable = data == 0 ? false : true;
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    /**
     * 加入书架
     * 修改样式
     * 本地存储 localStorage.list={}
     */
    addToMe() {
      if (this.opt.buy_mode === 1) {
        return;
      }
      this.opt.buy_mode = 1; //加入购物车
      let id = this.opt.id;
      console.log(id);
      //取出上一次的list
      let list = localStorage.list ? JSON.parse(localStorage.list) : {};
      list[id] = this.opt;
      localStorage.list = JSON.stringify(list);
    }
  }
};
</script>

<style scoped lang='scss'>
.btn {
  height: 24px;
  line-height: 24px;
  color: #fff;
  border: 0;
  width: 60px;
  font-size: 12px;
  cursor: pointer;
  outline: none;
}
.btn-my {
  border: 1px solid blue;
  color: blue;
}
.disable {
  border: 1px solid #666;
  color: #666;
}
</style>
