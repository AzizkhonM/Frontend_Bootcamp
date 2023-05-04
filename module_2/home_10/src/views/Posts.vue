<script>
 export default {
  methods: {
    getAllPosts(){
      this.$store.dispatch("getPost")
    }
  }
 }
</script>


<template>
  <div class="posts">
    <button @click="getAllPosts" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
      Get all posts
    </button>

    <ul>
      <li v-for="el in $store.state.getPost.posts">{{ el.title }}</li>
    </ul>
  </div>
</template>


<style>

</style>
