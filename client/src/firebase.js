// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-d12f2.firebaseapp.com",
  projectId: "mern-estate-d12f2",
  storageBucket: "mern-estate-d12f2.appspot.com",
  messagingSenderId: "498995406245",
  appId: "1:498995406245:web:cca53fbcd5058151fa744c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);