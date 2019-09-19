<template>
  <!-- <h1>
        <button @click="addFn(10)">+</button>
        {{count}}
        <button @click="reduceFn(10)">-</button>
        <p>{{str}}</p>
        <p>{{reverseStr}}</p>
  </h1>-->
  <div>
      <button @click="isShow=!isShow">切换</button>
    <div v-if="isShow" ref='a'>
      <input type="text" v-model="txt" ref='b'>
      <!-- 效果实现翻转 v-text='msg'    v-on:click='addFn' -->
      <h1 v-reverse:focus="{txt:txt}">{{txt}}</h1>
    </div>
    <son ref='c'/>
  </div>
</template>

<script>
import son from './son'
// 辅助函数
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "demo",
  data() {
    return {
      txt: "abc",
      isShow: true
    };
  },
  components:{son},
  mounted(){
    console.log(this)
  },
  directives: {
    reverse: {
      bind(el, binding) {
        //只执行一次，初始化的时候,且此时没有父节点null
        console.log("bind", binding);
        el.style.color = "red";
        el.innerHTML = binding.value.txt.toUpperCase();
      },
      inserted(el, binding, vnode) {
        console.log("inserted", vnode);
      },
      update(el, binding, vnode) {
        console.log(binding);
        //   console.log('update',el.innerHTML.split('').reverse().join(''))
        // el.innerHTML=binding.value.txt.split('').reverse().join('')
        el.innerHTML = binding.value.txt.toUpperCase();
      },
      componentUpdated() {
        console.log("componentUpdated");
      },
      unbind() {
        console.log("unbind");
      }
    }
  },
  created() {
    // console.log(this.$store.state.count)
  },
  computed: {
    // count(){
    //     return this.$store.state.count
    // },
    // str(){
    //     return this.$store.state.str
    // },
    ...mapState(["count", "str"]),
    // reverseStr(){
    //     return this.$store.getters.reverseStr
    // }
    ...mapGetters(["reverseStr"])
  },
  methods: {
    // addFn(n){
    //     this.$store.commit('addFn',n)
    // },
    // reduceFn(n){
    //     this.$store.commit('reduceFn',n)
    // }
    ...mapMutations(["addFn", "reduceFn"])
  }
};
</script>

<style>
</style>
