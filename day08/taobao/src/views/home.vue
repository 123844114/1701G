<template>
    <div class="layout">
        <header>{{$route.meta.title}}</header>
        <router-view/>
        <footer style="background:pink">底部 {{totalCount}}</footer>
    </div>
</template>

<script>
import {mapState,mapActions, mapGetters} from 'vuex'
export default {
computed:{
    ...mapGetters(['totalCount'])
}
}
</script>

<style>

</style>
