
<template>
  <div class="my">
    <table>
      <tr>
        <th>书名/最近更新章节</th>
        <th>作者</th>
        <th>更新进度</th>
      </tr>
      <tr v-for="item in data" :key="item.id">
        <td>
          <input type="checkbox" v-model="item.flag" @change="checkFn">
          {{item.title}}
        </td>
        <td>{{item.author}}</td>
        <td>{{item.score}}</td>
      </tr>
      <tr>
        <td>
          <input type="checkbox" v-model="checkAll" @change="checkAllFn">全选
        </td>
        <td>
          <button @click="delFn">删除</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      checkAll: false
    };
  },
  created(){
      let arr =localStorage.list?JSON.parse(localStorage.list):[] //从本地获取
      arr.forEach(element => {
          element.flag=false
      })
      this.data=arr
  },
  methods: {
    checkFn() {
      this.checkAll = this.data.every(item => item.flag);
    },
    checkAllFn() {
      this.data.forEach(item => (item.flag = this.checkAll));
    },
    delFn() {
      // 思路：过滤出未选中项，重新存入本地
      let arr = this.data.filter(item => item.flag == false);
      localStorage.list = JSON.stringify(arr);
    //   为了让视图跟着变化，必须同步data
        this.data=arr
    }
  }
};
</script>

<style>
</style>
