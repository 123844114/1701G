<template>
<div class="movie">
    <ul class="title">
          <router-link to="/home/movie/hot" tag="li">正在热映</router-link>
          <router-link to="/home/movie/now" tag="li">即将上映</router-link>
    </ul>
    <router-view/>
 </div>   
</template>
<script>

export default {
   
}
</script>
<style scoped lang="scss">

 .movie{
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
 }
 .title{
    width:100%;
    height: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .router-link-active{
     color:tomato;
  }
</style>