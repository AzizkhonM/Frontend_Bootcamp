import axios from "../axios"

export const AUTH = {
    LOGIN: (params) => axios.post("/auth/login", params)
}