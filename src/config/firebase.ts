// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUeP_xs69ei-yMrHEi2Y2I3C4iMbVR8zI",
  authDomain: "free-fire-tornament-6cee2.firebaseapp.com",
  databaseURL: "https://free-fire-tornament-6cee2-default-rtdb.firebaseio.com",
  projectId: "free-fire-tornament-6cee2",
  storageBucket: "free-fire-tornament-6cee2.firebasestorage.app",
  messagingSenderId: "399443779657",
  appId: "1:399443779657:web:748831ddd587c5ee351f98",
  measurementId: "G-RT2GCBDE0N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const database = getDatabase(app);
export const storage = getStorage(app);

export default app;