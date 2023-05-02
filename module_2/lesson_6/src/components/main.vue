<script>
import Section from "./section.vue"
    export default {
      components: {
        Section
      }
    }
</script>


<template>

  <Section text="Salom" col="blue"/>
  <Section text="Xayr"/>

</template>


<style lang="scss" scoped>

  main{
    min-height: calc( 100vh - 70px - 70px );
  }

</style>