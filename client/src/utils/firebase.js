
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "authexamnotes-f3dc0.firebaseapp.com",
  projectId: "authexamnotes-f3dc0",
  storageBucket: "authexamnotes-f3dc0.firebasestorage.app",
  messagingSenderId: "851989916961",
  appId: "1:851989916961:web:678c4e1d4ae7f673356260"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}