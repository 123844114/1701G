<template>
  <el-menu
    default-active="1"
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item index="1" @click="$router.push('/huoyuan')">
      <i class="el-icon-menu"></i>
      <span slot="title">货源管理</span>
    </el-menu-item>
    <el-menu-item index="2" @click="$router.push('/huoyun')">
      <i class="el-icon-menu"></i>
      <span slot="title">货运管理</span>
    </el-menu-item>
    <el-menu-item index="3">
      <i class="el-icon-setting"></i>
      <span slot="title">导航三</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  methods: {
  }
};
</script>

<style>
</style>
