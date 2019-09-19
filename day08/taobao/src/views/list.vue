<template>
    <div class="list">
        <!-- {{listjson}} -->
        <myItem v-for="(item,index) in listjson" :key="item.id" :options="item" :index='index'/>
    </div>
</template>

<script>
import myItem from '@/components/myItem'
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
export default {
    components:{myItem},
    computed:{
        ...mapState(['listjson'])
    },
    created(){
        //调接口
        this.getList()
    },
    methods:{
        ...mapActions(['getList'])
    }
}
</script>

<style>

</style>
