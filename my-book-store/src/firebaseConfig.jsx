// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAj9MvS0hZUWLSNPdQudOUpjIDRY2Wt6aM",
  authDomain: "bookshop-e658f.firebaseapp.com",
  projectId: "bookshop-e658f",
  storageBucket: "bookshop-e658f.appspot.com",
  messagingSenderId: "1062966581243",
  appId: "1:1062966581243:web:9fc90d4d90c96b485cdd5e",
  measurementId: "G-3K834HETZ5"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);