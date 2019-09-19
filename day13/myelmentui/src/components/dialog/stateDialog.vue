/**
*增加状态弹框
* */
<template>
    <el-dialog title="新增状态" :visible.sync="stateDialog.visible">
    <el-input v-model="name" autocomplete="off"></el-input>
    <div slot="footer" class="dialog-footer">
        <el-button @click="setStateVisible(false)">取 消</el-button>
        <el-button type="primary" @click="submitFn">确 定</el-button>
    </div>
</el-dialog>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
    data(){
        return{
            name:''
        }
    },
computed:{
    ...mapState(['stateDialog'])
},
methods:{
    ...mapMutations(['setStateVisible']),
    ...mapActions(['addState']),
    /**
     * 提交新增状态
     * 通过vuex调接口新增
     */
    submitFn(){
        this.addState(this.name)
    }
}
}
</script>

<style>

</style>
