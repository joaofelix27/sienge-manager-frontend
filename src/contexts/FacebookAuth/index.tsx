import { getAuth, signInWithPopup,FacebookAuthProvider } from "firebase/auth";
import { Children, createContext, useEffect, useState } from "react";
import app from "../../services/firebase";

const provider = new FacebookAuthProvider();

export const AuthFacebookContext = createContext<any>({});

interface Props {
  children: React.ReactNode;
}

export const AuthFacebookProvider = (props: Props) => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);

  const { children } = props;


  const signInFacebook = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);

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
        console.log(error)
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <AuthFacebookContext.Provider value={{ signInFacebook, signedFacebook: !!user }}>
      {children}
    </AuthFacebookContext.Provider>
  );
};
