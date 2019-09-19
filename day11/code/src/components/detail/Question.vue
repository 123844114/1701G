<template>
    <div class="question-content">
        <template v-if='options'>
            <h1>第{{$route.params.id*1+1}}题.{{options.question}}</h1>
            <ul>
                <li v-for="(item,index) in options.allAnswer" :key="index" @click="answerFn(item)">
                    <span class="dot" v-if="item.isok==null"></span>
                    <span class="iconfont icon-duigou"  style="color:green" v-if="item.isok==true"></span>
                    <span class="iconfont icon-icon2"  style="color:red" v-if="item.isok==false"></span>
                    <p>{{item.key}}.{{item.value}} </p>
                </li>
            </ul>
        </template>
        <h1 v-else>loading</h1>
    </div>
</template>

<script>
export default {
    props:['options'],
data(){
    return{
      isShow:false
    }
},
watch:{
    $route:{
        handler(to,from){
            console.log(' $route:',to)
        },
        deep:true,
        immediate:true
    }
},
methods:{
    /**
     * 答题
     */
    answerFn(item){
        // 如果已做答就直接return
        if(this.options.flag){
            return;
        }
        this.options.flag=true //已打题
        // this.isShow=true
        // 如果true 答对题了
      item.isok= this.options.answer==item.key?true:false
      this.options.allAnswer.forEach(item=>{
          if(item.key==this.options.answer){
              item.isok=true
          }
      }) 
      //如果打对题，本地count++
      let count= localStorage.count?localStorage.count*1:0
       if(item.isok){
           count++
           localStorage.count=count
       }
    }
}
}
</script>

<style scoped lang='scss'>
.question-content{
    h1{
        background: #fff;
        font-size: 16px;
        color: #1a63bb;
    }
    li{
        display: flex;
        background: #fff;
        // justify-content: space-between;
        .dot{
        display: inline-block;
        width: 20px;
        height: 20px;
        border: 1px solid #666;
        border-radius: 50%;
        margin-right: 5px;
    }
    }
    
}
</style>
