<template>
  <div class="item">
    {{txt}}
    <div class="top">
      <span>{{options.name}}</span>
      <span :class="[options.type===1?'blue':'red','tip']">{{txt}}</span>
    </div>
    <div class="mid">{{options.address}}</div>
    <div class="bot">
      <span>面试时间:{{options.time}}</span>
      <span class="tip">{{options.tit}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["options"],
  computed: {
    txt() {
      if (this.options.type == 0) {
        return "未开始";
      } else if (this.options.type == 1) {
        return "已打卡";
      } else if (this.options.type == 2) {
        return "已放弃";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.item {
  padding: 10px 20px;
  background: #fff;
  .top,
  .bottom {
    display: flex;
    justify-content: space-between;
  }
  .tip {
    padding: 2px 5px;
    background: #d2cccc;
  }
  .blue {
    background: blue;
  }
  .red {
    background: red;
  }
}
</style>
