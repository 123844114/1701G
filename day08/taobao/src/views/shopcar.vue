<template>
    <div class="shopcar">
        <!-- {{shopList}} -->
        <shopItem v-for=" item in shopList" :key="item.id" :options="item"/>
        <p>
            <input type="checkbox" :checked="checkAll" @change="changeCheckAll">
            <span>总价：{{totalPrice}}</span>
            <!-- <span>总个数{{totalCount}}</span> -->
        </p>
    </div>
</template>

<script>
import shopItem from '@/components/shopItem.vue'
import {mapState,mapActions, mapGetters, mapMutations} from 'vuex'
export default {
    components:{shopItem},
    computed:{
        ...mapState(['shopList','checkAll']),
        ...mapGetters(['totalPrice'])
    },
created(){
    this.getShopcarList()
},
methods:{
    ...mapActions(['getShopcarList']),
    ...mapMutations(['changeCheckAll'])
}
}
</script>

<style>

</style>
