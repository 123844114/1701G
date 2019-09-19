import Vue from 'vue'
new Vue({
  el:'#app',
  data:{
    bookList:[
      {name:'长宁帝军',num:789,flag:false},
      {name:'剑来',num:12,flag:false},
      {name:'神级奶爸',num:3543,flag:false},
      {name:'我是半妖',num:346,flag:false},
      {name:'末日敖旭',num:7542,flag:false},
    ],
    isCheckAll:false ,// 控制全选
    bookname:'',//新增书名
    // total:0,
    // checkNun:0,//相中项总个数
  },
  computed:{//计算属性中也可以定义变量，这个变量会随着data中的数据的改变而重新计算
    checkNun:function(){
      return  this.bookList.filter(item=>item.flag==true).length
    },
    total:function(){
     return  this.bookList.length
    }
  },
  methods:{
    /**
     * 点击选择一项
     * 给span标签添加.on
     * 判断是否全选了， arr.every()
     */
    checkedFn(item){
      console.log(item)
      item.flag=!item.flag
      this.isCheckAll=this.bookList.every(item=>item.flag)
      // this.checkNun= this.bookList.filter(item=>item.flag==true).length
    },
    /**
     * 全选功能
     */
    checkAllFn(){
      this.isCheckAll=!this.isCheckAll
      this.bookList.forEach(item=>item.flag=this.isCheckAll)
    },
    /**
     * 删除当前选中项，点谁删除谁
     * 找到index
     * splice
     */
    delFn(index){
      this.bookList.splice(index,1)
    },
    /**
     * 删除所有选中项
     * 过滤：flag：false
     * 设置isCheckAll
     */
    delAllChecked(){
     this.bookList= this.bookList.filter(item=>item.flag==false)
     if(!this.bookList.length){
       this.isCheckAll=false
     }
    },
    /**
     * 添加一本书
     * 结构：{name:'长宁帝军',num:789,flag:false}
     */
    pushBookList(){
      if(!this.bookname){return}
      this.bookList.push({name:this.bookname,num:0,flag:false})
      this.bookname=''
    }
  }
})