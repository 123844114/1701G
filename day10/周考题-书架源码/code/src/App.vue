<template>
  <div id="app">
    <router-view :datalist="datalist"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datalist: []
    };
  },
  created() {
    this.$axios.get("/list").then(({ data }) => {
      this.datalist = data.data;
    });
  }
};
</script>

<style scoped lang='scss'>
#app {
  display: flex;
  .main {
    width: 800px;
    margin: 0 auto;
  }
}
</style>
