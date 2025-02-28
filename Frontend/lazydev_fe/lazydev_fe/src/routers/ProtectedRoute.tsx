import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../services/authContext";

const ProtectedRoute = (router: any) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet /> ;
};

export default ProtectedRoute;
