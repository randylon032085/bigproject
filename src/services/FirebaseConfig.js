// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { meta } from "@eslint/js";
import { getMessaging, getToken } from "firebase/messaging";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const apiKey = import.meta.env.VITE_API_KEY;
const firebaseConfig = {
  apiKey: "AIzaSyCFWlM9lHkYKA_RfDAEmH0HZEBO6ryQitE",
  authDomain: "bean-upnorth.firebaseapp.com",
  databaseURL: "https://bean-upnorth-default-rtdb.firebaseio.com",
  projectId: "bean-upnorth",
  storageBucket: "bean-upnorth.firebasestorage.app",
  messagingSenderId: "132368379068",
  appId: "1:132368379068:web:8be855ff3801fb7eadb4b9",
  measurementId: "G-070KQ7KCK8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// initialize firebase services
const auth = getAuth(app);
const messaging = getMessaging(app);
const db = getDatabase(app);

//firebase messaging VAPID Key
const vapidKey =
  "BDO6rU45KApWreObslefE1Nc-lrhsSm1tz-QCk7aY5in4LpIHrfvEb7ObpiPQY-oav6RcxZQhG0FPVGkkEQ4yk4";

//function to get the users fcm token
export const getUserFCMToken = async () => {
  const user = auth.currentUser;
  if (user) {
    try {
      const token = await getToken(messaging, { vapidKey: vapidKey });
      if (token) {
        //store the fcm token in firebase realtime database
        await set(ref(db, `users/${user.uid}/fcmToken`), token);
        console.log("FCM stored successfully");
      }
    } catch (error) {
      console.error("Error getting FMC token", error);
    }
  }
};

export { auth, messaging, db };
