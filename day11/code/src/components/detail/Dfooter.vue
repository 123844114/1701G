<template>
    <footer>
        <p @click="prevFn"><span class="iconfont icon-zuojiantou"></span><span>上一题</span></p>
        <p><span class="iconfont icon-tijiao" @click="showTotal"></span>点击交卷</p>
        <p><span class="iconfont icon-shoucang"></span>收藏此题</p>
        <p @click="nextFn"><span class="iconfont icon-youjiantou"></span><span>下一题</span></p>
    </footer>
</template>

<script>
export default {
    props:['length'],
methods:{
    /**
     * 下一题
     */
    nextFn(){
        let id = this.$route.params.id*1
        // 判断数据的length
        if(id<this.length-1){
            id++
        }else{
            id=this.length-1
        }
        this.$router.push('/detail/'+id)
    },
    /**
     * 上一题
     */
    prevFn(){
        // this.$router.go(-1)
        let id = this.$route.params.id*1
        // 判断数据的length
        if(id<1){
            id=0
        }else{
            id--
        }
        this.$router.push('/detail/'+id)
    },
    showTotal(){
        let end = new Date().getTime()
        let start = localStorage.start*1
        // 时间差
        let temp = parseInt((end-start)/1000)
        console.log(temp)
        let min=parseInt(temp/60)
        let sec = temp%60
        console.log('得分',localStorage.count)
        console.log('时间',min+'分:'+sec+'秒')
    }
}
}
</script>

<style scoped lang='scss'>
footer{
    display: flex;
    justify-content: space-between;
    height: 60px;
    text-align: center;
    background: #0AB6F6;
    p{
        display: flex;
        flex-direction: column;
        flex: 1;
        color: #fff;
        .iconfont{
            font-size:30px
        }
    }
}
</style>
