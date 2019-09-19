<template>
  <div id="app">
    <myHeader>
      <span v-if="$route.meta.flag" @click="$router.back()" style="float:left"><</span>
      <span>{{$route.meta.title}}</span>
    </myHeader>
    <router-view class="main"></router-view>
    <myFooter></myFooter>
  </div>
</template>

<script>
import myHeader from '@/components/myHeader'
import myFooter from '@/components/myFooter'

export default {
  name: 'App',
  components: {
    myHeader,myFooter
  }
}
</script>

<style lang='scss' scoped>
#app{
  display: flex;
  flex-direction: column;
  .main{
    flex: 1;
    overflow: auto;
  }
}
</style>
