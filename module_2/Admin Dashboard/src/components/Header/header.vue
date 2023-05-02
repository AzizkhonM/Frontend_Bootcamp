<script>
import User from '../../ui/User/user.vue';
export default{
    name: "Header",
    props: {
        toggle: Function
    },
    components: {
        User
    }
}
</script>


<template>

<header class="shadow-md">
    <nav class="flex justify-between w-full items-center pe-6">
        <a href="/" class="ms-7 logo text-2xl text-center p-5 block text-blue-700 font-medium" style="font-family: 'Poppins'; font-weight: 500;">A-EXPRESS.UZ</a>
        
        <div class="flex">

        <User user="Azizkhon Muzaffarov"></User>

            <button @click="toggle" class="bg-blue-300 text-3xl h-[36px] focus:ring-2 flex justify-center items-center w-[36px]"><i class="bx bx-menu"></i>

            </button>
        </div>
    </nav>
</header>

</template>


<style>

</style>