<template>
  <div id="app">
    <!-- <transition name='fade' mode='in-out'> -->
      <!-- <keep-alive :include="/home/"> -->
        <router-view class="main"/>
      <!-- </keep-alive> -->
    <!-- </transition> -->
    <myFooter class="footer"/>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      obj: { name: "jim" },
      mobile: "1231"
    };
  }
};
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
}
.main {
  flex: 1;
  overflow: auto;
  height: 100%;
  width: 100%;
}
.footer {
  height: 40px;
  display: flex;
  justify-content: space-around;
}
/* .fade-enter,.fade-leave-to{
  transform: translateX(-100%);
}
.fade-enter-to,.fade-leave{
  transform: translateX(0%);
}
.fade-enter-active,.fade-leave-active{
  transition:all .5s
} */
</style>
