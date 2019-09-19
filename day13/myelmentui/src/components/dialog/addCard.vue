/**
*新增任务卡弹框页面
* */
<template>
  <el-dialog title="新增任务卡" :visible.sync="cardDialog.visible">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="任务名称">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="级别">
        <el-select v-model="form.level" placeholder="请选择紧急程度">
          <el-option label="紧急" value="warning"></el-option>
          <el-option label="一般" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="特殊资源">
        <el-radio-group v-model="form.resource">
          <el-radio label="线上品牌商赞助"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="活动形式">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
  props:['op'],
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  computed: {
    ...mapState(["cardDialog"])
  },
  methods: {
    onSubmit() {

  //     {
  //   "title": "完成猫眼电影路由配置3",
  //   "level": "warning",
  //   "state":op.state
  // }
      console.log("submit!");
    }
  }
};
</script>
<style lang="sass" scoped>

</style>

