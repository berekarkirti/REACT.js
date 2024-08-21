import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; 
import { setLogLevel } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBI77ThAWF1lOa9Qxbb_VVW7B-9t6PiouI",
  authDomain: "fir-auth-551cf.firebaseapp.com",
  projectId: "fir-auth-551cf",
  storageBucket: "fir-auth-551cf.appspot.com",
  messagingSenderId: "316073883657",
  appId: "1:316073883657:web:553e42b2e041578ca8a0d8"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };