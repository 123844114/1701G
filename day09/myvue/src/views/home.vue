<template>
    <div>
        <h1>我是首页home</h1>
        <!-- <router-link to='/detail/0'>一条数据</router-link> -->
        <myItem v-for="item in list" :key="item.id" :options="item"/>
    </div>
</template>

<script>

import myItem from '@/components/myItem'
export default {
components:{myItem},
data(){
    return{
        list:[]
    }
},
watch:{
    list:function(newval,oldval){
        console.log(newval,oldval)
    }
},
created(){
    this.$axios.get('/list').then(({data})=>{
        // console.log(data)
        this.list=data.data
    })
}
}
</script>

<style>

</style>
