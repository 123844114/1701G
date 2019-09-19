<template>
  <div class="app">
    <h1>qqweqwe</h1>
   <mydemo v-for="(item,index) in arr" :key="index" :options="item"></mydemo>
  </div>
</template>

<script>
import mydemo from './components/mydemo'
export default {
components:{mydemo},
data(){
  return{
    arr:[{name:'jim1',age:90},{name:'jim2',age:90}]
  }
}
}
</script>

<style>

</style>
