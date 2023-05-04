<script setup>
    import { defineProps } from "vue"
    const props = defineProps({
        data: Object
    })
</script>


<template lang="">
    <li class="list-group-item my-2 w-75 m-auto">
        {{ props.data.title }}
    </li>
</template>


<style lang="">


    
</style>