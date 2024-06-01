// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAT68Uy7eh9BwT3TeNxF5VFapN9iPRED5Y",
  authDomain: "netflix-react-1491f.firebaseapp.com",
  projectId: "netflix-react-1491f",
  storageBucket: "netflix-react-1491f.appspot.com",
  messagingSenderId: "692946108206",
  appId: "1:692946108206:web:a9127e365b88312a69c4bf",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
