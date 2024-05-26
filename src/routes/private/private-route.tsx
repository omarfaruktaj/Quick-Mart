import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/use-auth";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const auth = useAuth();
  const location = useLocation();

  if (auth?.loading) {
    return "loading...";
  }

  if (auth?.user) {
    return children;
  }

  return <Navigate to={"/login"} state={{ from: location }} replace />;
};

export default PrivateRoute;
