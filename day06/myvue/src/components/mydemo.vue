<template>
    <dl>
      <dt>{{options.name}}</dt>
      <dd>{{options.age}}</dd>
    </dl>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    };
  },
  props:['options']
};
</script>

<style>
</style>
