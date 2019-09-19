<template>
    <div class="movieHome">
        <header>{{$route.meta.title}}</header>
        <router-view class="main"/>
        <footer>
            <router-link to="/home/movie" tag='span'>电影</router-link>
            <router-link to="/home/cinema" tag='span'>影院</router-link>
            <router-link to="/home/my" tag='span'>我的</router-link>
        </footer>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang='scss'>
.movieHome{
    height: 100%;
    display: flex;
    flex-direction: column;
    header{
        height: 40px;
        background: #E54847;
        line-height: 40px;
        text-align: center;
        color: #fff
    }
    .main{
        flex: 1;
        overflow: auto
    }
    footer{
        height: 40px;
        // background: #E54847;
        border-top: 1px solid #ddd;
        line-height: 40px;
        text-align: center;
        // color: #fff;
        display: flex;
        justify-content: space-around
    }
    .router-link-active{
        color: #E54847;
    }
}
</style>
