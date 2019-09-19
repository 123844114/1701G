<template>
    <div class="home">
        <h1>首页</h1>
        <p>{{txt}}</p>
        <son @myEvent='mydemo'/>
        <son1/>
    </div>
</template>

<script>
import son from '@/components/son.vue'
import son1 from '@/components/son1.vue'
export default {
    name:'home',
    components:{son,son1},
 data(){
     return{
         flag:true,
         txt:'',
         list:[{id:0,content:'qrqerqerq'},{id:1,content:'cvbnmvbnm'}]
     }
 },
 methods:{
   mydemo(val){
     console.log(val)
     this.txt=val
   }
 },
 beforeCreate() {
    console.log("beforeCreate", 'home');
  },
  created() {
    console.log("created", 'home');
  },
  beforeMount() {
    console.log("beforeMount", 'home');
  },
  mounted() {
    console.log("mounted", 'home');
  },
  beforeUpdate() {
    console.log("beforeUpdate", 'home');
  },
  updated() {
    console.log("updated", 'home');
  },
  beforeDestroy() {
    console.log("beforeDestroy", 'home');
  },
  destroyed() {
    console.log("destroyed", 'home');
  },
   deactivated() {
    console.log("deactivated", 'home');
  },
   activated() {
    console.log("activated", 'home');
  }
}
</script>

<style scoped>
.home{
  /* background: red; */
  
}
</style>
