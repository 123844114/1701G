<template>
  <div class="item">
    <img :src="options.img" alt="">
    <p>{{options.title}}</p>
    <p>{{options.price}}</p>
    <button>立即订餐</button>
  </div>
</template>

<script>
export default {
props:['options','index']
}
</script>

<style lang="scss" scoped>
.item{
  width: 20%;
  height: 200px;
  border: 1px solid red;
  box-sizing: border-box;
  img{
    width: 100%;
  }
}
</style>
