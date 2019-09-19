<template>
  <div class="edit">
    <el-form :model="form">
      <el-form-item label="日期" :label-width="formLabelWidth">
        <el-input v-model="form.date" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="姓名" :label-width="formLabelWidth">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="地址" :label-width="formLabelWidth">
        <el-input v-model="form.address"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="cancle">取 消</el-button>
      <el-button type="primary" @click="visible = false">确 定</el-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
