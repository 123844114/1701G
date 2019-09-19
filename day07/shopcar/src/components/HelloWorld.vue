<template>
  <li>
    <input type="checkbox" v-model="option.flag" @change="$emit('myEvent',msg1)">
    <p class="img">
      <img :src="'static/images/'+option.src">
      <!-- <img v-lazy="'static/images/'+option.src" > -->
    </p>
    <p class="bei">
      <span>{{option.title}}</span>
      <span>{{option.price}}.00</span>
    </p>
    <p>
      <button @click="option.count--" v-if="option.count">-</button>
      <span class="ji" v-if="option.count">{{option.count}}</span>
      <button @click="addFn">+</button>
    </p>
  </li>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      count: 0,
      msg1: "123"
    };
  },
  props: ["option", "msg"],
  methods: {
    checkFn(option) {
      //  布尔值= 总数组.every()
      option.flag = !option.flag;
    },
    addFn() {
      this.option.count++;
      // 存本地
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
  width: 96%;
  height: 130px;
  margin-left: 5px;
  padding: 0 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.checked {
  display: inline-block;
  width: 15px;
  height: 15px;
  background-color: #fff;
  border: 1px solid #ccc;
}
.img {
  width: 90px;
  height: 100px;
}
.img > img {
  width: 90%;
  height: 100%;
}
.bei {
  display: flex;
  width: 150px;
  flex-direction: column;
}
.active {
  background-color: skyblue;
}
.ji {
  display: inline-block;
  width: 20px;
  height: 19px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  text-align: center;
}
</style>
