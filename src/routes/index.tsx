import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthEmailAndPasswordContext } from "../contexts/EmailAndPasswordAuth";
import { AuthFacebookContext } from "../contexts/FacebookAuth";
import { AuthGithubContext } from "../contexts/GitHubAuth";
import { AuthGoogleContext } from "../contexts/GoogleAuth";

const PrivateRoutes = () => {
  const { signedGoogle } = useContext(AuthGoogleContext);
  const { signedGithub } = useContext(AuthGithubContext);
  const { signedEmailAndPassword } = useContext(AuthEmailAndPasswordContext);
  const { signedFacebook } = useContext(AuthFacebookContext);
  return (signedGithub || signedGoogle ||signedEmailAndPassword || signedFacebook) ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes
