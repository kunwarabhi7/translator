import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyAUPHMFv5bt3E51q5QuIm4yuc2w8gHjozY",
  authDomain: "translator-ef949.firebaseapp.com",
  projectId: "translator-ef949",
  storageBucket: "translator-ef949.appspot.com",
  messagingSenderId: "324693948650",
  appId: "1:324693948650:web:ef520a2edfc3cbc7d4bf93",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);
export { auth, db, functions };
