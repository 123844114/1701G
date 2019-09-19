<template>
    <div class="home">
        <header>驾校考试科目一</header>
        <div @click="start" ><img src="static/images/home.png" alt=""></div>
    </div>
</template>

<script>
export default {
name:'home',
methods:{
    start(){
        this.$router.push('/detail/0')
        localStorage.clear()
        localStorage.start=new Date().getTime()
    }
}
}
</script>

<style scoped lang='scss'>
.home{
    header{
    height: 40px;
    line-height: 40px;
    background: #0287D2;
    color: #fff;
    text-align: center
}
}
</style>
