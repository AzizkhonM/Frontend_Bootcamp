import axios from "../services/axios";

const authstore = {
    state: () => (
        {username: ""}
    ),
    mutations: {
        SET_USERNAME(state, username) {
            state.username = username
        }
    },

}

export default authstore;
