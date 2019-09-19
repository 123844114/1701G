<template>
  <div>
    <div class="top">
      <p>
        <!-- {{value1.toLocaleString()}} -->
        <span>查询：</span>
        <el-input
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
          v-model="key"
          @change="searchFn(key)"
        ></el-input>
      </p>
      <el-button type="success" @click="$router.push('/add')">新增</el-button>
      <!-- <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
      </el-date-picker>-->
    </div>
    <el-table :data="list" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column prop="city" label="城市"></el-table-column>
      <el-table-column fixed="right" label="操作" width="250">
        <template slot-scope="scope">
          <el-button type="primary" @click="lookFn(scope.$index)" size="small">查看</el-button>
          <el-button type="info" size="small" @click="editFn(scope.row)">编辑</el-button>
          <el-button type="danger" size="small" @click="delFn(scope.$index)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <dialogHuoyuan :options="dialogOptions"/>
  </div>
</template>

<script>
import dialogHuoyuan from "@/components/dalogHuoyuan.vue";
import { mapActions, mapState, mapGetters, mapMutations } from "vuex";
export default {
  components: { dialogHuoyuan },
  data() {
    return {
      dialogOptions: {
        visible: false,
        title: "货源编辑",
        form: {}
      },
      value1: "",
      key: "",
      tableData: []
      // newList:[]
    };
  },
  computed: {
    ...mapState(['list'])
  },
  created() {
    this.getList()
  },
  methods: {
    ...mapActions(['getList','searchFn']),
    lookFn(index){
      this.$router.push('/detail/'+index)
    },
    delFn(index) {
      console.log(index);
      this.tableData.splice(index, 1);
    },
    editFn(data) {
      this.dialogOptions.visible = true;
      this.dialogOptions.form = data;
      console.log(this.dialogOptions);
    }
  }
};
</script>

<style scoped>
.top,
p {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  height: 40px;
}
p span {
  width: 100px;
}
p {
  width: 50%;
}
</style>
