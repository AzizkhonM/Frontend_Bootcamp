<script>
    export default{
        name: "Card",
        props: {
            data: Object
        }
    }
</script>


<template>
    <div class="card w-[260px] bg-white h-[340px] shadow m-5">
        <img :src="data.avatar" class="w-full" alt="rasm">
        <div class="card-body"></div>
        <h1 class="text-center">{{ data.first_name }}</h1>
        <p class="text-center">{{ data.email }}</p>
    </div>
</template>


<style>

</style>