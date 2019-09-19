<template>
  <div>
    <h3>子组件2</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      obj: { name: "lisi" }
    };
  },
  created() {
    this.$bus.$on("myEvent", data => {
      console.log(data);
    });
  }
};
</script>

<style>
</style>
