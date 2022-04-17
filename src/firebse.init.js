// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMmrCbtSrKM6BD-aDolPK59qOIAg3M5uY",
  authDomain: "motorcycle-repairing-hospital.firebaseapp.com",
  projectId: "motorcycle-repairing-hospital",
  storageBucket: "motorcycle-repairing-hospital.appspot.com",
  messagingSenderId: "813553196767",
  appId: "1:813553196767:web:8692d2e02b0a36aebf936a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth