<script>

import Header from "./components/header.vue"
import Main from "./components/main.vue"
import Footer from "./components/footer.vue"

export default {
  data(){

    return {
    
      number: 2
    
    }

  },
  components: {
    Header,
    Main,
    Footer
  }
}

</script>

<template>

  <Header/>
  <Main/>
  <Footer/>

</template>



<style lang="scss" scoped>

</style>