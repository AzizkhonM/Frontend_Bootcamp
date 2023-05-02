<template lang="">
    <div class="w-[80%] bg-lime-500 p-12 m-4 border" >
        <h1>EXTRA VUE 1 </h1>
        <button class="bg-red-400 p-2 focus:ring-2 ring-red-900" @click="sendMessage">SEND</button>
    </div>
</template>

<script>
export default {
    name:'Extra',
    data(){
        return {
            array:[1,2,3,4,5,6,7,8,9,10,11]
        }
    },
    methods:{
      sendMessage(){
        this.$emit('info', this.array)
      }
    }
    
}
</script>

<style lang="">
    
</style>