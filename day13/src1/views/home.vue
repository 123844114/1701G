<template>
  <el-container>
    <el-aside width="200px">
      <leftMenu/>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <router-view/>
      </el-main>
      <el-footer>
        <el-pagination layout="prev, pager, next" :total="50" 
         @size-change="handleSizeChange"
         @current-change="handleCurrentChange"
        ></el-pagination>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
import leftMenu from "@/components/leftMenu";
export default {
  components: { leftMenu },
  methods:{
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
  }
};
</script>

<style>
.el-container {
  height: 100%;
}
.el-aside {
  background: #545c64;
}
.el-header {
  height: 50px;
  line-height: 50px;
  color: #fff;
  background: #545c64;
}
</style>
