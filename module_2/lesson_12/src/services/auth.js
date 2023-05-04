import axios from "../services/axios"

export const auth = {

    login: (payload)=> axios.post("/user/login", payload)

}



