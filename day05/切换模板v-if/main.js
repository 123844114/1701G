import Vue from 'vue'
new Vue({
  el:'#app',
  data:{
    txt:'',
    isShow:true
  },
  methods:{
    clickFn(){
      console.log(event.currentTarget)
    },
    getValue(){
      console.log(event.target.value)
      this.txt=event.target.value
    }
  }
})