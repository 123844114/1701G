/**
改变状态弹框
* */
<template>
    <el-dialog title="改变状态" :visible.sync="changeStateDialog.visible">
    {{stateList}}
    <!-- <template v-if="stateList.length"> -->
        <p v-for="(item,index) in stateList" :key="index" @click="getNewState(item.state)">{{item.title}}</p>
    <!-- </template> -->
    </el-dialog>
</template>
<script>
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
export default {
    computed:{
        ...mapState(['changeStateDialog','stateList']),
    },
    methods:{
        ...mapMutations(['getNewState'])
    }
}
</script>
<style lang="sass" scoped>

</style>

