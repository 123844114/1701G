<template>
    <div class="hot">
        <!-- {{listJson}} -->
         <list v-for="item in listJson" :key="item.id" :options="item"></list>
    </div>
</template>
<script>
import list from "../../../components/list"
import {mapState} from "vuex"
export default {
    props:{

    },
    components:{
       list
    },
    data(){
        return {

        }
    },
    computed:{
        ...mapState(["listJson"])
    },
    methods:{

    },
    created(){
        this.$store.dispatch("getJson");
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">

.hot{
    width:100%;
    height: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
}
</style>