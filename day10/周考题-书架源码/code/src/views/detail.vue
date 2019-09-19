<template>
    <div>
        <h1>详情</h1>
        {{data}}
        <AddToMe :opt="data"/>
    </div>
</template>

<script>
import AddToMe from '@/components/AddToMe'
export default {
    props:['datalist','id'],
    data(){
        return{
            data:{}
        }
    },
    components:{AddToMe},
    created(){
        //
       this.data= this.datalist.filter(item=>item.id==this.id)[0]
        console.log(this.datalist)
    }
}
</script>

<style>

</style>
