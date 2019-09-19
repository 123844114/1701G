<template>
    <div class="detail">
        <h2>详情</h2>
        <!-- {{detailData}} -->
        <AddToMe :opt="detailData"/>

    </div>
</template>

<script>
import AddToMe from '@/components/AddToMe'
export default {
    props:['datajson','id'],
    computed:{
        detailData(){
            console.log(this.id)
            let arr= this.datajson.filter(item=>item.id==this.id)
            return arr[0]
        }
    },
    components:{AddToMe}

}
</script>

<style scoped lang='scss'>

</style>
