import localStorageService from "@/services/localStorageService"
import { useNavigate } from "react-router-dom"

const navigate = useNavigate()

export const handleLogout = () =>{
    localStorageService.removeToken()

    navigate("/login",{replace:true})
}