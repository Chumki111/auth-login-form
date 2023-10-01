// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuTr5UzGgj3PC6DLJg90CLJezWjIUMsrQ",
  authDomain: "auth-login-form-71cbd.firebaseapp.com",
  projectId: "auth-login-form-71cbd",
  storageBucket: "auth-login-form-71cbd.appspot.com",
  messagingSenderId: "56441809628",
  appId: "1:56441809628:web:bfa5357dc8d297d565e219"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;