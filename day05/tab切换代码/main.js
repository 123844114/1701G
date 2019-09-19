// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
new Vue({
  el: '#app',
  data: {
    tabList: [
      { title: '前端语言', content: ['js0', 'jq'] },
      { title: '后端语言', content: ['js1', 'jq']},
      { title: 'UI设计', content: ['js2', 'jq']}
    ],
    currentIndex:0,//当前选中项的index
  },
  methods: {
    changeTab(index){
      console.log(index)
      this.currentIndex=index
    }
  }
})