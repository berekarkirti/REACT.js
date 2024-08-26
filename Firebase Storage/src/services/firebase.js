// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCU1gY0nvCzPtCm6jVMp7MaoRpab8Micg8",
  authDomain: "fir-storage-8324d.firebaseapp.com",
  projectId: "fir-storage-8324d",
  storageBucket: "fir-storage-8324d.appspot.com",
  messagingSenderId: "1038070158586",
  appId: "1:1038070158586:web:36402560a7fb9b1dd92543"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);

// Export only once
export { auth, googleProvider, db };
