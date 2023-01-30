import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { Children, createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import app from "../../services/firebase";

const provider = new GithubAuthProvider();

export const AuthGithubContext = createContext<any>({});

interface Props {
  children: React.ReactNode;
}

export const AuthGithubProvider = (props: Props) => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);

  const { children } = props;

  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = () => {
      const sessionToken = localStorage.getItem("@AuthFireBase:token");
      const sessionUser: any = localStorage.getItem("@AuthFireBase:user");
      if (sessionToken && sessionUser) {
        setUser(sessionUser);
        navigate("/home");
      }
    };
    checkAuth();
  }, []);

  const signInGithub = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result);

        if (credential) {
          const token = credential.accessToken;

          // The signed-in user info.
          const user: any = result.user;
          setUser(user);
          if (token) {
            localStorage.setItem("@AuthFireBase:token", token);
          }

          localStorage.setItem("@AuthFireBase:user", JSON.stringify(user));
        }
      })
      .catch((error) => {
        console.log(error);
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <AuthGithubContext.Provider value={{ signInGithub, signedGithub: !!user }}>
      {children}
    </AuthGithubContext.Provider>
  );
};
