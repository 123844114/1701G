<template>
  <!-- <router-link :to="'/detail/'+options.id" tag='dl'> -->
  <dl @click="$router.push('/detail/'+options.id)">
    <dt>
        <!-- {{options}} -->
      <img :src="options.frontImg" alt>
    </dt>
    <dd>
      <p>{{options.name}}</p>
      <p>{{options.areaName}}</p>
      <p>
        <span>{{options.avgPrice}}元门市价</span>
        <!-- <span>已售{{item.shoper}}</span> -->
      </p>
    </dd>
  </dl>
  <!-- </router-link> -->
</template>

<script>
export default {
    props:['options'],
  data() {
    return {
      list: []
    };
  },
  methods: {}
};
</script>

<style lang="scss">

  h3 {
    border-bottom: 1px solid #ccc;
    height: 45px;
    line-height: 45px;
  }
  img {
    width: 90px;
    height: 90px;
  }
  dl {
    display: flex;
    padding: 10px;
    border-bottom: 1px solid #ccc;
    dd {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
  }

</style>
