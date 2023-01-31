import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import app from "../../services/firebase";
const provider = new GoogleAuthProvider();

interface IAuthContext {
  signInGoogle: () => void;
}

export const AuthGoogleContext = createContext<any>({});

interface Props {
  children: React.ReactNode;
}

export const AuthGoogleProvider: React.FC<Props> = (props: Props) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);

  const { children } = props;

  const signInGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);

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
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  return (
    <AuthGoogleContext.Provider value={{ signInGoogle, signedGoogle: !!user }}>
      {children}
    </AuthGoogleContext.Provider>
  );
};
