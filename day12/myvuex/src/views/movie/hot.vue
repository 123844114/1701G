<template>
    <div class="hot">
        <!-- {{hotList}} -->
        <homeItem v-for="item in hotList" :key="item.id" :options="item"/>
    </div>
</template>

<script>
import homeItem from '@/components/homeItem.vue'
import {mapState,mapActions} from 'vuex'
export default {
    components:{homeItem},
    computed:{
        ...mapState(['hotList'])
    },
    created(){
        // this.$store.dispatch('getHotList')
        this.$store.dispatch('getHotList').then((data)=>{
            console.log(data)
        })
    }
}
</script>

<style>

</style>
