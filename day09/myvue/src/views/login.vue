<template>
  <div class="login">
    <h1>登陆</h1>
    <p>
      <input type="text" placeholder="用户名" v-model="username">
    </p>
    <p>
      <input type="password" placeholder="密码" v-model="pwd">
    </p>
    <p>
      <button @click="submit">登陆</button>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      pwd: ""
    };
  },
  methods:{
      submit(){
          //存本地
          sessionStorage.username=this.username
          //返回上次的路由
          this.$router.back()
      }
  }
};
</script>

<style>
</style>
