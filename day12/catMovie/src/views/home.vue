<template>
  <main>
    <header>
      <p>{{$route.meta.title}}</p>
      <!-- $router.meta.name -->
    </header>
    <div class="content">
      <router-view/>
    </div>
    <footer>
      <ul>
        <router-link to="/home/movie" tag="li">电影</router-link>
        <router-link to="/home/movieRoom" tag="li">影院</router-link>
        <router-link to="/home/my" tag="li">我的</router-link>
      </ul>
    </footer>
  </main>
</template> 
<script>
export default {
};
</script>
<style scoped lang="scss">
main {
   width:100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   overflow: hidden;
}
.content{
    width:100%;
    height: 100%;
    overflow: auto;
}
header {
  width: 100%;
  height: 50px;
  background: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}
footer {
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  ul {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #999;
  }
  .router-link-active {
    color: tomato;
  }
}
</style>