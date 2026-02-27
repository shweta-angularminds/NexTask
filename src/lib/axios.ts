import localStorageService from "@/services/localStorageService"
import axios from "axios"

const api = axios.create({
    baseURL:"http://localhost:8000",
})

api.interceptors.request.use((config)=>{
    const token = localStorageService.getToken()

    if(token){
        config.headers.Authorization= `Bearer ${token}`
    }

    return config
})

export default api