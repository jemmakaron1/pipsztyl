// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_HbmNGSiBgZ750fccVvlGN47ist5F8iE",
  authDomain: "cewefoto.firebaseapp.com",
  projectId: "cewefoto",
  storageBucket: "cewefoto.appspot.com",
  messagingSenderId: "108712762516",
  appId: "1:108712762516:web:2618bd176fbcc22b2de881",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)
