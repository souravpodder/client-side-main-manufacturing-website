// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYI4BPuNZmxsIhF_HcQTJ9ooX3cbnK7PI",
  authDomain: "camera-parts-manufacturer.firebaseapp.com",
  projectId: "camera-parts-manufacturer",
  storageBucket: "camera-parts-manufacturer.appspot.com",
  messagingSenderId: "204720796739",
  appId: "1:204720796739:web:4b1d8b33e0a3082bf050f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;