<template>
    <div class="myitem">
        <!-- {{options}} -->
        <img :src="options.img" alt="">
        <p>{{options.title}}</p>
        <p>{{options.price}}</p>
        <p><button>立即订餐</button></p>
    </div>
</template>

<script>
export default {
 props:['options']
}
</script>

<style lang='scss' scoped>
.myitem{
   width: 20%;
   border: 1px solid red;
   img{
       width: 100%
   }
}
</style>
