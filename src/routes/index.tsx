import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthGoogleContext } from "../contexts/GoogleAuth";

const PrivateRoutes = () => {
  const { signed } = useContext(AuthGoogleContext);
  console.log("signed que eu tenho",signed)
  return signed ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes
