import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import app from "../../services/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const AuthEmailAndPasswordContext = createContext<any>({});

interface Props {
  children: React.ReactNode;
}

export const AuthEmailAndPasswordProvider = (props: Props) => {
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

  const signInEmail = (email: string, password: string) => {
    if (email && password) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user: any = userCredential.user;
          const token = user.accessToken;
          if (token) {
            localStorage.setItem("@AuthFireBase:token", token);
          }

          localStorage.setItem("@AuthFireBase:user", JSON.stringify(user));
          setUser(user);
        })

        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  };

  return (
    <AuthEmailAndPasswordContext.Provider
      value={{ signInEmail, signedEmailAndPassword: !!user }}
    >
      {children}
    </AuthEmailAndPasswordContext.Provider>
  );
};
