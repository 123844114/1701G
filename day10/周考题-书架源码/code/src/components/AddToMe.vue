<template>
  <button class="btn btn-my" @click="addBook" :class="{disable:disable}">加入书架</button>
</template>

<script>
export default{
  props:['opt'],
  data(){
    return{
      disable:false
    }
  },
  // created(){
  //   // 判断本地是否有该条数据
  //   let arr = localStorage.list?JSON.parse(localStorage.list):[]
  //   let id = this.opt.id
  //   this.disable=  arr.some(item=>item.id==id)
  //   console.log(this.disable)
  // },
  watch:{
    opt:{
      handler(n,o){
    // 判断本地是否有该条数据
      let arr = localStorage.list?JSON.parse(localStorage.list):[]
      let id = n.id
      this.disable=  arr.some(item=>item.id==id)
      },
      deep:true,
      immediate:true
    }
  },
  methods:{
    /*1、样式  单条数据上的buy_mode字段作为开关来实现的 0->1
      2、本地存储  localStorage.list[{id:1009},{id:5345}]
      */
    addBook(){
      if(this.disable){ //置灰状态不能再点击
        return;
      }
      this.opt.buy_mode=1
      //1.获取本地存储的数据list
      let arr = localStorage.list?JSON.parse(localStorage.list):[]
      //2.把当前条数据push到arr中
      arr.push(this.opt)
      localStorage.list=JSON.stringify(arr)
    }
  }
}
</script>

<style scoped lang='scss'>
.btn {
  height: 24px;
  line-height: 24px;
  color: #fff;
  border: 0;
  width: 60px;
  font-size: 12px;
  cursor: pointer;
  outline: none;
}
.btn-my {
  border: 1px solid blue;
  color: blue;
}
.disable {
  border: 1px solid #666;
  color: #666;
}
</style>
