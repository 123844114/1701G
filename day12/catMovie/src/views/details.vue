<template>
    <div>
{{detailData}}
    </div>
</template>
<script>
import {mapState,mapActions} from "vuex"
export default {
    // props:["id"],
    components:{
    },
    data(){
        return {

        }
    },
    computed:{

        ...mapState(['detailData'])
    },
    methods:{
        //  ...mapActions("detailJson")

    },
    created(){
        let id = this.$route.params.id;
       this.$store.dispatch("detailJson",id)
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">

</style>