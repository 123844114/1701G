<template>
  <div id="app">
    <!-- {{datajson}} -->
    <router-view class='main' :datajson='datajson'/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      datajson:[]
    }
  },
  created(){
    this.$axios.get('/list').then(({data})=>{
      console.log(data.data)
      this.datajson=data.data
    })
  }
}
</script>

<style scoped lang='scss'>
#app {
display: flex;
.main{
  width: 800px;
  margin:0 auto
}
}
</style>
