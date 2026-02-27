import { Navigate } from "react-router-dom";
import LocalStorageService from "@/services/localStorageService";

interface PublicRouteProps {
  children: React.ReactNode;
}

export default function PublicRoute({ children }: PublicRouteProps) {
  const token = LocalStorageService.getToken();

  if (token) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
}
