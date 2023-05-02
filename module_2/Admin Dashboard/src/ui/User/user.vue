<script>
    export default{
        name: "User",
        props: {
            user: String
        }
    }
</script>


<template>

    <div class="user flex w-[300px] gap-x-2 justify-end items-center pe-6">
        <h1 class="text-md font-semibold">{{ user }}</h1>
        <img src="https://picsum.photos/id/123/45/45" class="w-[36px] h-[36px] object-cover rounded-full" alt="User">
    </div>

</template>


<style>

</style>