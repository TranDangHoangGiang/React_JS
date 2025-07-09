import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBGRCQij67JR78xW8DfWxu-vt1APzssZ0Y",
  authDomain: "webbanhang-82da4.firebaseapp.com",
  projectId: "webbanhang-82da4",
  storageBucket: "webbanhang-82da4.firebasestorage.app",
  messagingSenderId: "981658106426",
  appId: "1:981658106426:web:b34b58773d087d610c9303",
  measurementId: "G-8L05SM81PL",
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
