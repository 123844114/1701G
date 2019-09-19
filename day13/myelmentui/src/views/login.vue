<template>
    <div>
        <h1>登录</h1>
        <p><input type="text" ></p>
        <p><input type="text"></p>
        <p><button @click="login">登录</button></p>
    </div>
</template>

<script>
export default {
methods:{
login(){
    localStorage.user='zhangsanfeng'
    this.$router.go(-1)
}
}
}
</script>

<style>

</style>
