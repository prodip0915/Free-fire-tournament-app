// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

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
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const realtimeDb = getDatabase(app);

// Export Firebase services for use in other parts of the app
export { app, analytics, auth, db, storage, realtimeDb };
export default app;