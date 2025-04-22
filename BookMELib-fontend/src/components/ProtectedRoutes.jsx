// ProtectedRoute.js
import { Navigate } from "react-router-dom";
import useAuthStore from "@/stores/authStore";

const ProtectedRoute = ({ children, allowedTypes }) => {
  const { user } = useAuthStore();
  if (!user || !allowedTypes.includes(user.user_type)) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoute;
