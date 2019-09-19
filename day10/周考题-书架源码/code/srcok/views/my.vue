<template>
    <div>我的{{myList}}</div>
</template>

<script>
export default {
data(){
    return{
        myList:JSON.parse(localStorage.list)
    }
}
}
</script>

<style scoped lang='scss'>

</style>
