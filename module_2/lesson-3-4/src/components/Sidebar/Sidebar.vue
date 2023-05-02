<script>
import { navLinks } from "../../constants/navLinks";

export default {
  data() {
    return {
      navlinks: navLinks,
    };
  },
  methods: {
    logOut() {
      localStorage.clear();
      this.$router.push("/login");
    },
  },
};
</script>

<template>
  <div class="siebar w-[250px] shadow-lg min-h-screen relative">
    <a href="/" class="logo text-center text-2xl p-3 block text-purple-700">DASHBOARD</a>

    <div class="list">
      <router-link
        class="list__item font-bold p-4 block shadow my-2  bg-purple-50 hover:bg-purple-700 hover:text-white duration-100"
        v-for="el in navlinks"
        :to="el.link"
      >
        <i :class="el.icon"></i> <span class="ms-3">{{ el.title }}</span>
      </router-link>
    </div>

    <button
      @click="logOut"
      class="bg-red-600 absolute bottom-4 left-4 p-2 rounded-md text-white focus:ring-2 ring-black-400"
    >
      CHIQISH
    </button>
  </div>
</template>

<style scoped>

.list__item {
  border-radius: 0 6px 6px 0;
}
.router-link-active {
  background-color: blueviolet;
  color: #fff;
}
</style>
