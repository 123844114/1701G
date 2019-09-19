<template>
    <div class="shopitem">
        <input type="checkbox" v-model="options.flag" @change="changeCheckOne">
        <p>
            <span>{{options.title}}</span>
            <span>{{options.price}}</span>
        </p>
        <p>
            <button @click="reduceFn(options.id)">-</button>
            <span>{{options.count}}</span>
            <button @click="addFn(options.id)">+</button>
        </p>
    </div>
</template>

<script>
import {mapState,mapActions,mapMutations} from 'vuex'
export default {
props:['options'],
methods:{
...mapMutations(['addFn','reduceFn','changeCheckOne'])
}
}
</script>

<style>
.shopitem{
    border: 1px solid red
}
</style>
