import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import app from "../../services/firebase";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";

export const AuthEmailAndPasswordContext = createContext<any>({});

interface Props {
  children: React.ReactNode;
}

export const AuthEmailAndPasswordProvider = (props: Props) => {
  const [userEmail, setUserEmail] = useState<any>(null);
  const auth = getAuth(app);

  const { children } = props;

  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = () => {
      const sessionToken = localStorage.getItem("@AuthFireBase:token");
      const sessionUser: any = localStorage.getItem("@AuthFireBase:user");
      if (sessionToken && sessionUser) {
        setUserEmail(sessionUser);
        navigate("/home");
      }
    };
    checkAuth();
  }, []);

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const signInEmail = async (email: string, password: string) => {
    if (email && password) {
        const userCredential = await signInWithEmailAndPassword(email, password);
        if (userCredential){
          localStorage.setItem("@AuthFireBase:token", userCredential.user.refreshToken);
          localStorage.setItem("@AuthFireBase:user", JSON.stringify(userCredential));
          setUserEmail(userCredential)
        }
       
      }
  };

  return (
    <AuthEmailAndPasswordContext.Provider
      value={{ signInEmail, signedEmailAndPassword: !!userEmail, loading }}
    >
      {children}
    </AuthEmailAndPasswordContext.Provider>
  );
};
