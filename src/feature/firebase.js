// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    getAuth,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
  } from 'firebase/auth';
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQ6RQh11Ci4n-cFgY_a429xNhV42bygz4",
  authDomain: "fir-demo-1096d.firebaseapp.com",
  databaseURL: "https://fir-demo-1096d.firebaseio.com",
  projectId: "fir-demo-1096d",
  storageBucket: "fir-demo-1096d.appspot.com",
  messagingSenderId: "8236277739",
  appId: "1:8236277739:web:5d84aa4d6b5fd15bc383ae",
  measurementId: "G-FRFWD79G6M"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const defaultStorage = getStorage(app);
export const defaultFirestore = getFirestore(app);
export const auth = getAuth(app);