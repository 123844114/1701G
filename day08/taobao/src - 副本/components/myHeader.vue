<template>
  <header>
    <slot name="left"></slot>
    <slot>我是默认值</slot>
    <slot name="right"></slot>
    <button @click="demo">点我试试</button>
  </header>
</template>

<script>
export default {
    data(){
        return{
            msg:'hello world'
        }
    },
    methods:{
        demo(){
            console.log(1111)
             this.$bus.$emit('myEvent',this.msg)
        }
    }
};
</script>

<style lang='scss' scoped>
header{
    display: flex;
    justify-content: space-between
}
</style>
