<template>
  <div id="app">
    <swiper>
      <!-- slides -->
      <swiper-slide>
        <img src="https://img.alicdn.com/tfs/TB1SLvIV4naK1RjSZFBXXcW7VXa-520-280.jpg_q90_.webp" alt>
      </swiper-slide>
      <swiper-slide>
        <img src="https://img.alicdn.com/simba/img/TB1QMlPV7PoK1RjSZKbSut1IXXa.jpg" alt>
      </swiper-slide>
    </swiper>
    <header>
      <button @click="sortFn">排序</button>
      <span class="iconfont icon-xiangzuo"></span>
      <p><input type="text" placeholder="输入搜索名字" v-model="searchKey" @input="searchFn"></p>
      <span>分享</span>
    </header>
    <section>
      <ul class="ul">
        <HelloWorld
          @myEvent="myFn"
          v-for="(item,index) in dataJson"
          :key="index"
          :option="item"
          :msg="msg"
        />
      </ul>
    </section>
    <!-- 带弹出层的footer -->

    <footer class="footer-cover">
      <div class="cover" v-show="isShow">
        <div class="cover-list">
           <button style="width:100px" @click="emptyCar">清空购物车</button>
          <div class="item" v-for="(item,index) in carList" :key="index">
            <span>{{item.title}}</span>
            <span>{{item.price}}</span>
            <p>
              <button @click="item.count--">-</button>
              <span class="ji" >{{item.count}}</span>
              <button @click="item.count++">+</button>
            </p>
          </div>
        </div>
      </div>
      <p>
        <label>
          <input type="checkbox" v-model="isCheckAll" @change="checkAllFn"> 全选
        </label>
        <b @click="isShow=!isShow">总计￥{{totalPrice}}</b>
        <button class="jie">去结算({{totalCount}})</button>
      </p>
    </footer>
    <!-- <footer>  
      <p>
        <label><input type="checkbox" v-model="isCheckAll" @change="checkAllFn"> 全选</label>
        <b>总计￥{{totalPrice}}</b>
        <button class="jie">去结算({{totalCount}})</button>
      </p>
      <ol>
        <li>首页</li>
        <li>热门</li>
        <li>会员</li>
        <li>购物车</li>
        <li>我的</li>
      </ol>
    </footer>-->
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
// import dataJson from "./data/data.json";

export default {
  name: "App",
  data() {
    return {
      msg: "qwe",
      isShow: false,
      dataJson:[],
      copyDataJson:[],
      isCheckAll: false,
      searchKey:''//搜索框内容
    };
  },
  computed: {
    /**
     * 总价  price*count
     * reduce
     */
    totalPrice: function() {
      return this.dataJson.reduce((total, current) => {
        if (current.flag) {
          // 打勾的才计算
          total = total + parseFloat(current.price) * current.count;
        }
        return total;
      }, 0);
    },
    /**
     * 计算总个数
     */
    totalCount: function() {
      return this.dataJson.reduce((total, current) => {
        return total + current.count;
      }, 0);
    },
    /**
    加入购物车的数据信息
     */
     carList(){
       return this.dataJson.filter(item=>item.count>0&&item.flag)
     }
  },
  created(){
    //调接口
    this.$axios.get('/login').then(({data})=>{
      console.log(data)
      this.dataJson=data
      this.copyDataJson=data //存备份
    })
  },
  components: {
    HelloWorld
  },
  methods: {
    /**
     * 模糊查询
     * 数组的filter
     */
    searchFn(){
    this.dataJson=this.copyDataJson //恢复数据
    this.dataJson=  this.dataJson.filter(item=>item.title.includes(this.searchKey))
    },
    /**
     * 清空购物车
     * 将数据恢复到原始状态
     */
    emptyCar(){
      this.dataJson.forEach(item=>{
        item.flag=false
        item.count=0
      })
      // 弹层消失
      this.isShow=false
    },
    /**
     * 全选功能
     */
    checkAllFn() {
      console.log(this.isCheckAll);
      this.dataJson.forEach(item => (item.flag = this.isCheckAll));
    },
    myFn(val) {
      // 数组使用every方法，判断每条数据的flag是否为true
      // 影响isCheckAll
      console.log(val);
      this.isCheckAll = this.dataJson.every(item => item.flag);
    },
    sortFn() {
      //排序价格
      this.dataJson.sort((a, b) => {
        return parseFloat(a.price) - parseFloat(b.price);
      });
    }
  }
};
</script>

<style lang="scss">
@import "./conmons.scss";
* {
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 12px;
}

#app,
section {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.active {
  background-color: skyblue;
}
img {
  // width: 100%;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  color: #fff;
  background-color: plum;
  border-bottom: 1px solid #ccc;
}
b {
  width: 245px;
  display: inline-block;
  background: #4a4646;
  width: 245px;
  display: inline-block;
  padding: 10px 0;
}
.jie {
  height: 40px;
  background-color: purple;
  color: #fff;
  width: 100px;
}
.ul {
  width: 100%;
  overflow: auto;
  flex: 1;
}
ol {
  width: 100%;
  height: 40px;
  padding-top: 5px;
  border-top: 1px solid #ccc;
}
ol > li {
  float: left;
  width: 20%;
  text-align: center;
}
.checked {
  display: inline-block;
  width: 15px;
  height: 15px;
  background-color: #fff;
  border: 1px solid #ccc;
}

footer {
  padding: 5px 0;
  color: #fff;
  background-color: plum;
  position: relative;
}
button {
  outline: none;
  width: 20px;
  height: 20px;
  background-color: #fff;
  border: 0;
  border: 1px solid #ccc;
}
.footer-cover {
  width: 100%;
  height: 40px;
  padding: 0;
  p {
    display: flex;
    justify-content: space-around;
  }
  //弹出层
  .cover {
    top: 0;
    bottom: 40px;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    z-index: 10;
    .cover-list {
      min-height: 80px;
      width: 100%;
      background: #fff;
      position: absolute;
      bottom: 0;
    }
  }
}
.swiper-container {
  width: 100%;
}
.item{
  display: flex;
  color: red;
  justify-content: space-between;
  border-bottom: 1px solid blue;
  // background: red
}
</style>
