<template lang="">
    <div class="w-[80%] bg-cyan-500 p-12 m-4 border">
        <h1>EXTRA VUE 1 </h1>

        <Extra2 @info="sendData"/>

  

    </div>
</template>

<script>
import Extra2 from './Extra2.vue';
export default {
    name:'Extra',
    data(){
        return {
            
        }
    },
    props:['text'],
    components:{
        Extra2
    },

    methods:{
      sendData(e){
        this.$emit('salom',e)
      }
    }
}
</script>

<style lang="">
    
</style>