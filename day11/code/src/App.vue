<template>
  <div id="app">
    <template v-if='dataList.length'>
      <router-view :dataList="dataList"/>
    </template>
    <h1 v-else>loading</h1>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      dataList:[]
    }
  },
  created(){
    this.$axios.get('/list').then(({data})=>{
        this.dataList=data
    })
  }
}
</script>

<style scoped lang='scss'>

</style>
