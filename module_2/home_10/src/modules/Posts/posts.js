import axios from "../../service/axios/axios"

const getPost = {

    state: () => {
        {
            posts: []
        }
    },

    mutations: {
        SET_POST(state, payload){
            state.posts = payload
        }
    },

    actions: {
        async getPosts({commit}){
            try {
                const response = await axios.get("/posts")
                commit("SET_POST", response.data)
            } catch (error) {
                console.log(error);
            }
        }
    }

}

export default getPost;