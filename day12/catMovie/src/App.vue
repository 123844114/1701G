<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components:{
    
  }
}
</script>

<style>
#app {
   display: flex;
   flex-direction: column;
   overflow: hidden;
}
main{
  width:100%;
  height: 100%;
}
</style>
