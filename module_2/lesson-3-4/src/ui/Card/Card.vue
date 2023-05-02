<script>
export default {
    name:"Card",
    props:{
        data:Object
    }
}
</script>


<template>
    <div class="card w-[260px] h-[340px] bg-white shadow m-5">
        <img :src="data.avatar" class="w-full" alt="rasm">
        <div class="card-body">
        <h1 class="text-center">{{ data.first_name }} {{ data.last_name  }}</h1>
        <p>{{ data.email }}</p>
        </div>
    </div>
</template>