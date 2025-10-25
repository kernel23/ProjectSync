// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADg5qU3pJC01z4YV9V_vtr_6Ug49vEqdU",
  authDomain: "project-management-is.firebaseapp.com",
  projectId: "project-management-is",
  storageBucket: "project-management-is.firebasestorage.app",
  messagingSenderId: "307837945237",
  appId: "1:307837945237:web:2709a8c46f39529280e29c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
