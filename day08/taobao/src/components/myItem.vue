<template>
  <div class="list-item" @click="$router.push({path:`/detail/${options.id}`})">
    <h4>{{options.title}}</h4>
    <p>
      <span>￥{{options.price}}</span>
      <button @click="addToShopCar(index)">加入</button>
    </p>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
 props:['options','index'],
 methods:{
   ...mapActions(['addToShopCar'])
 }
}
</script>

<style>

</style>
