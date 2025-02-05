// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { meta } from "@eslint/js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFWlM9lHkYKA_RfDAEmH0HZEBO6ryQitE",
  authDomain: "bean-upnorth.firebaseapp.com",
  projectId: "bean-upnorth",
  storageBucket: "bean-upnorth.firebasestorage.app",
  messagingSenderId: "132368379068",
  appId: "1:132368379068:web:8be855ff3801fb7eadb4b9",
  measurementId: "G-070KQ7KCK8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
