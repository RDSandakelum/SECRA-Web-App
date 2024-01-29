import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_5_1X-H6T52b8LGLi8lm8a7_jfglDuVw",
  authDomain: "secra-21fb8.firebaseapp.com",
  projectId: "secra-21fb8",
  storageBucket: "secra-21fb8.appspot.com",
  messagingSenderId: "716452514259",
  appId: "1:716452514259:web:2d9fcec17268213cdc4726",
  measurementId: "G-Z29L2ZW88F"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);