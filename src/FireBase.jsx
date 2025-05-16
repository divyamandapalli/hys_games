import { getFirestore} from "firebase/firestore";
import{getAuth,GoogleAuthProvider} from "firebase/auth";
import firebase from "firebase/compat/app";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAs8j8Ye6XtwJ6TkehGBxzNtKjkLlCwDnM",
  authDomain: "fir-project1-789ba.firebaseapp.com",
  projectId: "fir-project1-789ba",
  storageBucket: "fir-project1-789ba.firebasestorage.app",
  messagingSenderId: "419289222848",
  appId: "1:419289222848:web:96e41042917e39decf6725"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db=getFirestore(app)
export const provider = new GoogleAuthProvider();