import { createStore } from "vuex"
import axios from "../service/axios/axios"


const store = createStore({
    state(){
        return {
            number: 1,
            str: "",
            load: true,
            posts: [],
            loadPost: false,
            errorMessage: ""
        }
    },

    mutations: {
        INCREMENT() {
            this.state.number++
        },

        SET_STR(state, value){
            state.str = value
        },

        SET_LOAD(state){
            console.log(state.load);
            state.load = false
        },

        SET_POST(state, payload){
            state.posts = payload
        },

        SET_LOADING(state){
            state.loadPost = true
        },

        SET_ERROR(state, error){
            state.errorMessage = error
        }
    },

    actions: {
        async getPost(context){
            try {
                console.log(context);
                const response = await axios.get("/posts")
                context.commit("SET_POST", response.data)
                context.commit("SET_LOADING")
            } catch (error) {
                console.log(error);
                context.commit("SET_ERROR", error)
            }
        }
    }

})


export default store