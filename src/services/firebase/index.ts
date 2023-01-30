// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAN79UMt8m9bc0_z9LEcxas-dCf9p1v7VM",
  authDomain: "sienge-manager-auth.firebaseapp.com",
  projectId: "sienge-manager-auth",
  storageBucket: "sienge-manager-auth.appspot.com",
  messagingSenderId: "206264577776",
  appId: "1:206264577776:web:886e56429d91a9dad55c35",
  measurementId: "G-4K30REPQWY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;