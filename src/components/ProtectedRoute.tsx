import { Navigate } from "react-router-dom";
import localStorageService from "@/services/localStorageService";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const token = localStorageService.getToken();
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}
