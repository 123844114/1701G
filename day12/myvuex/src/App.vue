<template>
  <div id="app">
    <router-view class="content"/>  
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "App",
  data() {
    return {
      list: [],
      scroll: null,
      scrollY:0
    };
  },
  created() {
    // this.getList();
  },
  mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        // scrollY: true,
        click: true,
        probeType:2
      });
      this.scroll.on('scroll',(pro)=>{
        console.log(pro)
        let {y} = this.scroll;
        y = Math.abs(y);
        if(y<100){
            this.scrollY = 0;
        }else{
            this.scrollY = y-100
        }
      })
      this.$nextTick(() => {
          this.scroll.refresh();
      });
  },
  methods: {
    getList() {
      this.$axios.get("/api").then(({ data }) => {
        this.list = data.movieList;
        this.list.forEach(item => {
          item.img = item.img.replace(/http/, "https");
          item.img = item.img.replace(/w.h/, "128.80");
        });
        // this.scroll.refresh();
      });
    }
  }
};
</script>

<style scoped lang='scss'>
#app{
  
}
</style>
