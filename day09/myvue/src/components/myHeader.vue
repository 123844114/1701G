<template>
    <header><slot></slot></header>
</template>

<script>
export default {
name:'myheader'
}
</script>

<style lang='scss' scoped>
 header{
     width: 100%;
     height: 40px;
     line-height: 40px;
     text-align: center;
     background: #06C1AE;
     color: #fff
 }
</style>
