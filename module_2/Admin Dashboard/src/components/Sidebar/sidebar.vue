<script>

import { navLinks } from '../../constants/navLinks';
export default{
    name: "Sidebar",
    data(){
        return{
            navLinks: navLinks
        } 
    }
}

</script>


<template>

    <div class="sidebar w-[250px] shadow-lg min-h-screen relative">

        <a href="/" class="logo text-2xl text-center p-5 block text-blue-700" style="font-family: 'Poppins'; font-weight: 500;">A-EXPRESS.UZ</a>

        <div class="list">
            <router-link class="list_item p-4 font-bold block my-2 hover:bg-[#dedede] duration-300" v-for="el in navLinks" :to="el.link">
                    <i :class="el.icon"></i> <span class="ms-3">{{ el.title }} Qal</span>
            </router-link>
        </div>


    </div>

</template>


<style>

.router-link-active{
    background-color: black;
    color: white;
}

.router-link-active:hover{
    color: black;
}

</style>