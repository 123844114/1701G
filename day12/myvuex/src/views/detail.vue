<template>
  <div class="detail">
    <header>
      <span @click="$router.go(-1)"><</span>
      详情
    </header>
    <div class="main">{{detail}}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  props:['id'],
  computed:{
    ...mapState(['detail'])
  },
  created(){
    //调接口 
    // let id = this.$router.params.id
    let id =this.id
    this.$store.dispatch('getDetail',id)
    // this.$axios.get('detail?id=1977').then(()=>{})
  }
};
</script>

<style>
</style>
