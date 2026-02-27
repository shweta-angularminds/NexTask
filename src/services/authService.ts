import axios from "axios";
import type { LoginFormValues, signupFormValues } from "@/schemas/authSchema";
import localStorageService from "./localStorageService";

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

