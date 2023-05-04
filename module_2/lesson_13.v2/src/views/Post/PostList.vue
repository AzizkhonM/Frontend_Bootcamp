<script setup>
    import { defineProps } from "vue"
    import Loader from "../../components/UI/Loader.vue";
    import NoData from "../../components/UI/NoData.vue";
    import PostItem from "./PostItem.vue";
    const props = defineProps({
        post: Object
    })
    console.log(props.post);
</script>


<template lang="">
    <h1 class="text-center fw-bold">POST LIST</h1>

    <div v-if="props.post.load">
        <Loader />
    </div>

    <div v-else-if="!props.post.arr.length">
        <NoData />
    </div>


    <ul v-else class="list-group text-center">
        <PostItem v-for="el in props.post.arr" :data="el" :key="el.id" />
    </ul>
</template>


<style lang="">


    
</style>