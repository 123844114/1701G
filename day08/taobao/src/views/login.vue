<template>
    <div>
        <input type="text" v-model="user">
        <button @click="submit">登陆</button>
    </div>
</template>

<script>
export default {
data(){
    return{
        user:''
    }
},
methods:{
    submit(){
        localStorage.user=this.user
        this.$router.back()
    }
}
}
</script>

<style>

</style>
