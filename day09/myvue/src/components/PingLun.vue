<template>
    <div class="pinglun">
        {{imgSrc}}
        <p><img :src="imgSrc" alt="" class="avator"> <span>{{options.name}}</span> <span>{{options.date}}</span></p>
        <div>
            <h4>{{options.content}}</h4>
            <p><img :src="'static/image/pinglun/'+item" alt="" v-for="(item,index) in options.images" :key="index"></p>
        </div>
        <p>地址</p>
    </div>
</template>

<script>
export default {
props:['options'],
computed:{
    imgSrc(){
        return this.options.avator?'static/image/avator/'+this.options.avator:'static/image/1.png'
    }
},
watch:{}
}
</script>

<style scoped lang="scss">
.avator{
    width: 40px;
    height: 40px;
    border-radius: 50%
}
.pinglun{
        border-bottom: 13px solid #eee;
}
</style>
