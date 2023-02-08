import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthEmailAndPasswordContext } from "../contexts/EmailAndPasswordAuth";
import { AuthProvidersContext } from "../contexts/ProvidersAuth";

const PrivateRoutes = () => {
  const { signedEmailAndPassword } = useContext(AuthEmailAndPasswordContext);
  const { signed } = useContext(AuthProvidersContext);
  return signed || signedEmailAndPassword ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
