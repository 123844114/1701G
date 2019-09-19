<template>
    <div class="home">
        <header>头部区域 省略</header>
        <div class="routerBar">
            <router-link to="/task" tag='span'>任务</router-link>
            <router-link to="/share" tag='span'>分享</router-link>
            <router-link to="/file" tag='span'>文件</router-link>
            <router-link to="/schedule" tag='span'>日程</router-link>
        </div>
        <router-view class="main"></router-view>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang='scss'>
.home{
    height: 100%;
    display: flex;
    flex-direction: column
}
header{
    height: 60px;
    background: pink
}
.routerBar{
    height: 30px;
    line-height: 30px;
    border-bottom: 1px solid #bbb7b7;
    span{
        padding: 0 10px;
    }
}
.router-link-active{
    color: red
}
.main{
    flex:1;
    padding: 10px;
    overflow: hidden;
    background: #f5f2f2;
}
</style>
