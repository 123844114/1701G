<template>
    <div>
        <h3 @click="$bus.$emit('myEvent',obj)">子组件1</h3>
    </div>
</template>

<script>
export default {
    data(){
        return {
            obj:{name:'zhangsan'}
        }
    }
}
</script>

<style>

</style>
