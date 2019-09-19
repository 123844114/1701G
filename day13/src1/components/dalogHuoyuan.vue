<template>
  <el-dialog :title="options.title" :visible.sync="options.visible">
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
  </el-dialog>
</template>

<script>
export default {
  props: ["options"],
  data() {
    return {
      visible: true,
      formLabelWidth: "120px",
      form: {}
    };
  },
  watch:{
    options:{
        handler(n,o){
            console.log(n)
            this.visible=n.visible
            this.form=n.form
        },
        deep:true,
        immediate:true
    }  
  },
  methods:{
      cancle(){
          this.$parent.dialogOptions.visible=false
      }
  }
};
</script>

<style>
</style>
