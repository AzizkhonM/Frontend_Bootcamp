<script>
import Sidebar from "../../components/Sidebar/Sidebar.vue";
import Header from "../../components/Header/Header.vue"

export default {
    name: "Dashboard",


    components: {
        Sidebar,
        Header
    },

    methods: {
        toggleMenu() {
            this.$refs.swipe.classList.toggle("swipe");
            this.$refs.grow.classList.toggle("full");
        },
    },
}
</script>


<template>
    <Header :toggle="toggleMenu" />

    <main class="flex">
        <aside ref="swipe" class="top-0 bg-white mt-[-56px]">
            <Sidebar />
        </aside>

        <section class="main max-w-full grow" ref="grow">
            <router-view></router-view>
        </section>
    </main>
</template>


<style scoped>
aside {
    transition: all 0.3s ease;
}

.full {
    min-width: 100% !important;
    transform: translateX(-14.3%);
}

.swipe {
    transform: translateX(-120%);
}
</style>
