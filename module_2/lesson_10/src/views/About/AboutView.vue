<script>
 export default {
  methods: {
    add(){
      this.$store.commit("INCREMENT")
    }
  }
 }
</script>

<template>
  <div>
  
  About
  
    <h1>{{  $store.state.number  }}</h1>
    <button @click="add">ADD</button>
  
  </div>
</template>

<style>

</style>
