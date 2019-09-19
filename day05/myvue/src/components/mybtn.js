
export default {// 就是一个组件，组件可以当作一个自定义标签
    data(){
      return{
        count:0,
        list:[1,2,3]
      }
    },
    methods:{
      addFn(){
        this.count++
      }
    },
    template:`<div class="mybtn">
    <my-span/>
    <myglobel/>
    <button @click="addFn" v-for="item in list">按钮{{item}}</button>
    </div>`,
    components:{
      'mySpan':{
        template:`<span>我是一个组件</span>`
      }
    }
  }