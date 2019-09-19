<template>
  <div id="app">
    <div class="tab">
      <span
        v-for="(item,index) in dataJson"
        :key="index"
        @click="tabFn(index)"
        :class="{active:curentIndex===index}"
      >{{item.name}}</span>
    </div>
    <div class="main">
      <myItem
        v-for="(item,index) in getList(curentIndex)"
        :key="index"
        :options="item"
        :index="index"
      />
    </div>
  </div>
</template>

<script>
import myItem from "./components/myItem";
import dataJson from "./data/data.json";
export default {
  name: "app",
  data() {
    return {
      curentIndex: 0,
      dataJson
    };
  },
  components: {
    myItem
  },
  methods: {
    tabFn(index) {
      this.curentIndex = index;
    },
    /**
     * 得到不限标签的数组
     */
    getList(index) {
      console.log(index);
      if (index === 0) {
        let newArr = [];
        this.dataJson.forEach(item => {
          if (item.list) {
            newArr.push(item.list);
          }
        });
        return newArr.flat();
      } else {
        return this.dataJson[index].list;
      }
    }
  }
};
</script>

<style scoped lang="scss">
#app {
  width: 90%;
  margin: 0 5%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .tab {
    width: 100%;
    height: 40px;
    line-height: 40px;
    display: flex;
    justify-content: space-between;
    span {
      flex: 1;
      text-align: center;
    }
  }
  .main {
    flex: 1;
    overflow-y: auto;
    display: flex;
    flex-wrap: wrap;
    // justify-content: ;
  }
  .active {
    background: red;
  }
}
</style>
