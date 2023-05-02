<script>
    import Extra2 from "./extra2.vue"
    export default{
        name: "Extra",
        props: ["text"],
        components: {
            Extra2
        },
        methods:{
            sendData(){
                this.$emit("data", "Salom App")
            }
        }
    }
</script>


<template>

<div class="w-[100%] bg-cyan-500 p-12 m-4 border flex justify-center items-center">
    <h1 class="text-center">Extra Vue 1 {{ text }}</h1>
    <Extra2 />
    <button class="bg-red-400 p-2 focus:ring-4 ring-red-300" @click="sendData">SEND</button>
</div>

</template>


<style>

</style>