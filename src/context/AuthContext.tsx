import { getProfile } from "@/services/authService";
import localStorageService from "@/services/localStorageService";
import {  createContext,useContext,useEffect, useState, type ReactNode } from "react";


interface User{
    id:string;
    email:string;
    name:string;
}

interface AuthContextType {
    user:User|null;
    setUser:React.Dispatch<React.SetStateAction<User | null >>;
    loading:boolean;
    fetchProfile:()=>Promise<void>;
    logout:()=>void;
}

const AuthContext = createContext<AuthContextType |undefined>(undefined)

interface AuthProviderProps{
    children:ReactNode;
}

export const AuthProvider = ({ children }:AuthProviderProps) => {
  const [user, setUser] = useState<User|null>(null);
  const [loading, setLoading] = useState(true);

  const fetchProfile = async () => {
    try {
      const data = await getProfile();
      setUser(data);
    } catch (error) {
      console.log("Not authenticated");
      setUser(null);
      localStorageService.removeToken();
    } finally {
      setLoading(false);
    }
  };

  const logout = () =>{
    localStorageService.removeToken()
    setUser(null)
  }

  useEffect(() => {
    const token = localStorageService.getToken();

    if (token) {
      fetchProfile();
    } else {
      setLoading(false);
    }
  }, []);
  return (
    <AuthContext.Provider value={{ user, setUser, loading, fetchProfile,logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context){
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context;
};