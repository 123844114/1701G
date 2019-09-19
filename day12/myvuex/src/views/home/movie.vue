<template>
  <div class="movie">
    <p class="top">
      <span>北京</span>
      <router-link to="/home/movie/hot" tag="span">正在热映</router-link>
      <router-link to="/home/movie/show" tag="span">即将上映</router-link>
      <span class="iconfont icon-sousuo"></span>
    </p>
    <router-view class="movie-main"></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang='scss'>
.movie {
  height: 100%;
  display: flex;
  flex-direction: column;
  .top {
    height: 40px;
    // background: #E54847;
    border-bottom: 1px solid #ddd;
    line-height: 40px;
    text-align: center;
    // color: #fff;
    display: flex;
    justify-content: space-around;
  }
  .router-link-active {
    color: #e54847;
    border-bottom: 2px solid red;
  }
  .movie-main{
    flex: 1;
    overflow: auto;
  }
  .iconfont{
    font-size: 20px;
    color: #e54847;
  }
}
</style>
