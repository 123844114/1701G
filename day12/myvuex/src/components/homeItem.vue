/** 
* 作者：zxw
* 日期：19-5-28
* 功能：正在热映列表子组件
*/
<template>
    <div class="homeitem" @click="$router.push('/detail/'+options.id)">
        <img :src="options.img" alt="">
        <div class="content">
            <p>{{options.nm}}</p>
            <p>观众评{{options.sc}}</p>
            <p>{{options.star}}</p>
            <p>{{options.showInfo}}</p>
        </div>
        <div class="button">购票</div>
    </div>
</template>

<script>
/**热映子组件 */
export default {
 props:{
     options:{
         type:Object,
         required:true
     }
 }
}
</script>

<style scoped lang='scss'>
.homeitem{
    padding: 10px;
    display: flex;
    justify-content: space-between;
    img{
        height: 90px;
    }
    .content{
        display: flex;
        flex-direction: column;
        p{
            flex: 1
        }
    }
}
</style>
