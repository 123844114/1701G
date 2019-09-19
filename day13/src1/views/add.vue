<template>
  <div class="add">
    <h2>新增页面</h2>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="name" required>
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="日期" required>
        <el-col :span="11">
          <el-form-item prop="date">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="ruleForm.date"
              style="width: 100%;"
              format="yyyy 年 MM 月 dd 日"
              value-format="yyyy-MM-dd"
            ></el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="城市" prop="city">
        <el-select v-model="ruleForm.city" placeholder="请选择城市">
          <el-option label="北京" value="beijing"></el-option>
          <el-option label="上海" value="shanghai"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="地址" prop="address">
        <el-input type="textarea" v-model="ruleForm.address"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        date: "",
        city: "",
        address: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入姓名名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        date: { required: true, message: "日期必选", trigger: "blur" },
        city: { required: true, message: "日期必选", trigger: "blur" }
      }
    };
  },
  methods: {
    // addList(){
    //   this.$store.dispatch('addList',this.ruleForm)
    // },
    ...mapActions(["addList"]), //简化
    submitForm(formName) {
      // let vm=this
      this.$refs[formName].validate(valid => {
        if (valid) {
          //调接口
          this.addList(this.ruleForm);
          this.$router.go(-1);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style>
.el-input {
  width: 200px;
}
</style>
