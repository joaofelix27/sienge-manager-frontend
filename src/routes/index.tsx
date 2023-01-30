import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthGithubContext } from "../contexts/GitHubAuth";
import { AuthGoogleContext } from "../contexts/GoogleAuth";

const PrivateRoutes = () => {
  const { signedGoogle } = useContext(AuthGoogleContext);
  const { signedGithub } = useContext(AuthGithubContext);
  return (signedGithub || signedGoogle) ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes
