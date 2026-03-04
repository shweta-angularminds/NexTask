import axios from "axios";
import type { LoginFormValues, signupFormValues } from "@/schemas/authSchema";
import api from "@/lib/axios";

export const signUpService = async (data: signupFormValues) => {
  const response = await axios.post("http://localhost:8000/auth/register", {
    name: data.name,
    email: data.email,
    password: data.password,
  });
  return response.data;
};


export const loginService = async(data:LoginFormValues)=>{
  const response=await axios.post(
    "http://localhost:8000/auth/login",
    data
  )
  return response.data
}


export const getProfile = async()=>{
  const response = await api.get("/auth/profile")
  return response.data
}
