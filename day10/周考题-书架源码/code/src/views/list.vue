<template>
    <div>
        <div class="tabbar">
            <span class="active">全部</span><span>玄幻</span><span>武侠</span>
        </div>
        <ListItem v-for="item in datalist" :key="item.id" :options="item"/>
    </div>
</template>

<script>
import ListItem from '@/components/ListItem.vue'
export default {
props:['datalist'],
 components:{ListItem}
}
</script>

<style scoped lang='scss'>
.list{
    .tabbar{
        height: 40px;
        line-height: 40px;
        background: #eee;
        display: flex;
        span{
            width: 10%; 
            &.active{
                color: red;
            }
        }
    }
}
</style>

