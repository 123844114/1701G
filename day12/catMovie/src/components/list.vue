<template>
     <!-- <router-link :to="'/details/'+options.id" tag="dl"> -->
      <dl>
         <dt> <img :src="options.img"></dt>
       <dd>
         <h3>{{options.nm}}</h3>
         <p>观众评：<span>{{options.sc}}</span></p>
         <p>主演：{{options.star}}</p>
         <p>{{options.showInfo}}</p>
       </dd>
       <dd>
         <!-- {{options.id}} -->
         <p @click="$router.push('/details/'+options.id)">购票</p>
       </dd>
      </dl>
     <!-- </router-link> -->
</template>

<script>
export default {

  props:["options"],
  data () {
    return {
  
    }
  },
  methods:{
    
  },
  created(){
    // let id = this.id;
    // console.log(id,'id')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
   dl{
     width:100%;
     height: auto;
     display: flex;
     justify-content: space-evenly;
     
     h3{
           width:170px;
           overflow: hidden;
           text-overflow: ellipsis;
           white-space: nowrap;
     }
     dt{
       width:100px;
       img{
         width:100%;
       }
     }
     :nth-child(2){
       margin: 0 10px;
       p{
           width:170px;
           overflow: hidden;
           text-overflow: ellipsis;
           white-space: nowrap;
       }
     }
    //  dd:nth-child(2){
    //    display: flex;
    //    flex-direction: column;
    //    justify-content: space-between;
    //  }
     dd:nth-child(3){
       display: flex;
       flex-direction: column;
       justify-content: center;
       p{
          padding: 5px 10px; 
          border-radius: 5px;
          background: tomato;
       }
     }
   }
</style>
