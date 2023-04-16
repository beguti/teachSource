import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB-Gdatngv3Ibs9TH2f5M0B5IujDcojuRc",
  authDomain: "teachsource-e044a.firebaseapp.com",
  projectId: "teachsource-e044a",
  storageBucket: "teachsource-e044a.appspot.com",
  messagingSenderId: "805205251425",
  appId: "1:805205251425:web:9e000b4e12effda736e120",
  measurementId: "G-0DF0KKJMKD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage =getStorage(app);



