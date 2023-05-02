<script>
    export default {
        methods: {
            INCR(){
                this.$store.commit("INCREMENT")

                if(this.$store.state.number>=10){
                    this.$store.commit("SET_LOAD")
                }
            },
            SET_VAL(val){
                return this.$store.commit("SET_STR", val)
            },
            REQ_POST(){
                this.$store.dispatch("getPost")
            }
        },

        computed: {
            NUM(){
                return this.$store.state.number
            }
        }
    }
</script>


<template lang="">
    <div>
        <router-view></router-view>

        <h1>{{ NUM }}</h1>
        <button @click="INCR">INCREMENT</button>

        <input type="text" @input="($e) => SET_VAL($e.target.value)">
        <button @click="REQ_POST">GET ALL POSTS</button>
    </div>
</template>


<style lang="" scoped>
    
</style>