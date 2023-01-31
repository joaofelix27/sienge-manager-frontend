import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthEmailAndPasswordContext } from "../contexts/EmailAndPasswordAuth";
import { AuthGithubContext } from "../contexts/GitHubAuth";
import { AuthGoogleContext } from "../contexts/GoogleAuth";

const PrivateRoutes = () => {
  const { signedGoogle } = useContext(AuthGoogleContext);
  const { signedGithub } = useContext(AuthGithubContext);
  const { signedEmailAndPassword } = useContext(AuthEmailAndPasswordContext);
  return (signedGithub || signedGoogle ||signedEmailAndPassword) ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes
