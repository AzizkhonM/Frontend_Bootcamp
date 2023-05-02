<script>
export default {
  name: "User",
  props: {
    user: String,
  },
};
</script>

<template>
  <div class="user flex w-[200px] gap-x-2  items-center">
    <h4 class="text-md text-purple-900 font-semibold"><slot/></h4>

    <img
      src="https://picsum.photos/id/236/45/45"
      class="w-[36px] h-[36px] object-cover rounded-full"
      alt="user"
    />
  </div>
</template>

<style></style>
