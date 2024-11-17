// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8-b0N3P-jp27xm8XmnoDtEiytGgVXHk8",
  authDomain: "travel-site-33f5b.firebaseapp.com",
  projectId: "travel-site-33f5b",
  storageBucket: "travel-site-33f5b.firebasestorage.app",
  messagingSenderId: "69837518169",
  appId: "1:69837518169:web:8f37671a59b8fe2c774848"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;