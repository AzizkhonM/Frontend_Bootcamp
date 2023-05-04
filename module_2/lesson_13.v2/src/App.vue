<script setup>

import { reactive, onMounted } from "vue"
import PostList from "./views/Post/PostList.vue";

  let things = reactive({
    load: true,
    arr: []
  })

  const getPost = async() => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts")
      const posts = await response.json()
      things.arr = posts
      things.load = false
    } catch (error) {
      console.log(error);
    }
  }

  onMounted(() => {
    getPost()
  })

</script>

<template>

  <PostList :post="things" />

</template>

<style scoped>
  li.hover{
    background-color: black;
  }
</style>
