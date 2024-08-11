// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // Import getAuth and GoogleAuthProvider

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUQv9RnJIMQTpfOPNmEZn_6sjrQi0HKH8",
  authDomain: "fir-database-953d4.firebaseapp.com",
  projectId: "fir-database-953d4",
  storageBucket: "fir-database-953d4.appspot.com",
  messagingSenderId: "23526035878",
  appId: "1:23526035878:web:c41d4fbc28c0e3601abf67"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Set up the Google Auth provider
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };

