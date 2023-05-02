<script>

import Sidebar from './components/Sidebar/sidebar.vue';
import Header from './components/Header/header.vue';
import Home from './views/Home/home.vue';
import Staff from "./views/Staff/staff.vue"
import Card from './ui/Card/card.vue';

export default{
  data(){
    return{
      toggle: true
    }
  },
  components: {
    Sidebar,
    Header,
    Home,
    Staff,
    Card
  },
  methods: {
    toggleMenu(){
      /* this.toggle=!this.toggle */
      this.$refs.swipe.classList.toggle("swipe")
      this.$refs.grow.classList.toggle("w-full")
    }
  },

  mounted(){
    /* console.log(this.$refs.toggle); */
    console.log(this.user);
  }
}

</script>


<template>

<Header :toggle="toggleMenu"/>
<main class="flex">

  <aside ref="swipe" v-if="toggle" class="top-0 bg-white mt-[-72px]">
    <Sidebar />
  </aside>

  <section class="main max-w-full" ref="grow">
   <!--  <div class="bg-slate-100 p-5 max-w-full m-2 h-[85vh]">
        <h1 class="text-xl">
          <input v-model="val" type="text" name="" id="">
        </h1>
        <div class="flex">
    <Card v-for="el in filterID" :key="el.id" :data="el"/>
  </div>
    </div> -->

    <router-view></router-view>
<!--     <Extra :text="programming" @data="responseBtn"/> -->

  </section>


</main>

</template>


<style scoped>

  aside{
    transition: all 0.3s ease;
  }
  .swipe{
    transform: translateX(-120%);
  }

  .full{
    min-width: 100% !important;
    transform: translateY(5%);
  }

</style>