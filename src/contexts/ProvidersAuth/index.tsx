import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import app from "../../services/firebase";
import {
  useSignInWithFacebook,
  useSignInWithGoogle,
  useSignInWithGithub,
} from "react-firebase-hooks/auth";
import { getAuth, UserCredential } from "firebase/auth";

export const AuthProvidersContext = createContext<any>({});

interface Props {
  children: React.ReactNode;
}

export const AuthProvidersProvider = (props: Props) => {
  const auth = getAuth(app);
  const [userState, setUserState] = useState<any>(null);

  const { children} = props;

  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = () => {
      const sessionToken = localStorage.getItem("@AuthFireBase:token");
      const sessionUser: any = localStorage.getItem("@AuthFireBase:user");
      if (sessionToken && sessionUser) {
        setUserState(sessionUser);
        navigate("/home");
      }
    };
    checkAuth();
  }, []);

  const [signInWithFacebook] = useSignInWithFacebook(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signInWithGithub] = useSignInWithGithub(auth);

  type Tproviders = {
    Facebook : ()=> Promise<UserCredential>,
    Google: ()=> Promise<UserCredential>,
    Github: ()=> Promise<UserCredential>,
  }

  const providers = {
    Facebook: signInWithFacebook,
    Google: signInWithGoogle,
    Github:signInWithGithub
  }


  const signInProvider = async (provider:string) => {
    const userCredential =  await providers[provider as keyof Tproviders]() as UserCredential;
    if (userCredential) {
      localStorage.setItem(
        "@AuthFireBase:token",
        userCredential.user.refreshToken
      );
      localStorage.setItem(
        "@AuthFireBase:user",
        JSON.stringify(userCredential)
      );
      setUserState(userCredential);
    }
  };

  return (
    <AuthProvidersContext.Provider
      value={{ signInProvider, signed: !!userState }}
    >
      {children}
    </AuthProvidersContext.Provider>
  );
};
