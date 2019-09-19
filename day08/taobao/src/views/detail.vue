<template>
  <div class="detail">
    <h1>详情</h1>
    {{detail}}  
    <b v-if="detail">{{detail.title}}</b>
    <router-view/>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
    props:['id','user'],
  computed: {
    ...mapState(["detail"])
  },
  created() {
    this.getDetail(this.id);
  },
  methods: {
    ...mapActions(["getDetail"])
  }
};
</script>

<style>
</style>
