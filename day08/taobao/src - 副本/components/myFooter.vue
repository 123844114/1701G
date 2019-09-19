<template>
    <footer>
        我是底部
    </footer>
</template>

<script>
export default {
created(){
    this.$bus.$on('myEvent',(data)=>{console.log(data)})
}
}
</script>

<style scoped lang='scss'>
footer{
    height: 40px;
    line-height: 40px;
    background: #fff;
    text-align: center
}
</style>
