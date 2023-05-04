<script setup>

  import AboutView from "./views/AboutView.vue"
  import HomeView from "./views/HomeView.vue"
  import { ref, reactive, onMounted, onBeforeMount, onUpdated, onBeforeUpdate } from "vue"

  let number = ref(0)
  let things = reactive({
    num: 5,
    load: true,
    string: "Eshak",
    arr: []
  })

  const update = () => {
    number.value++
    console.log(number.value);
  }

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

  onBeforeMount(() => {
    console.log("before mount");
  })

  onUpdated(() => {
    console.log("updated");
  })

  onBeforeUpdate(() => {
    console.log("before update");
  })

</script>


<template>

  <!-- <AboutView />
  <HomeView /> -->
<!-- 
  <h1>{{ number }}</h1>
  <button @click="update">update</button> -->

  <h1 v-if="things.load" class="text-center">LOADING...</h1>

  <h1 v-else-if="!things.arr.length" class="text-center">NO DATA</h1>

  <ul v-else v-for="el in things.arr" :key="el.id" class="list-group">
    <li class="list-group-item my-2">{{ el.title }}</li>
  </ul>

</template>


<style>

</style>