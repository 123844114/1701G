<template>
  <div>查看{{detail}}</div>
</template>

<script>
import { mapActions, mapState, mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["detail"])
  },
  created() {
    // this.getDetail(this.$route.params.index)
    // this.$store.commit('getDetail',this.$route.params.index)
    this.getDetailData(this.$route.params.index)
  },
  methods:{
    //  ...mapMutations(['getDetail']) 
    ...mapActions(['getDetailData'])
  }
};
</script>

<style>
</style>
