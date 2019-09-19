import vue from 'vue'
new vue({
    el:'#app',
    data:{
        msg:'12312',
        flag:false,
        isShow:false,
        txt:'显示'
    },
    methods:{
        toggle(){
            // 功能代码
            this.flag=!this.flag
        },
        showDiv(){
           this.isShow=!this.isShow
           if(this.isShow){
               this.txt='隐藏'
           }else{
            this.txt='显示'

           }
            
        }
    }
})