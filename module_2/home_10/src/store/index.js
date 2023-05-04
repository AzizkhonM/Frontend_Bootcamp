import { createStore } from "vuex"
import getPost from "../modules/Posts/posts"


const store = createStore({

    modules: {
        getPost
    }
    
})


export default store