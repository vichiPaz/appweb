import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyB3iIWcv9PQXx7ehtGc3GWPx7WnHndez24",
  authDomain: "vue-firebase-2-31128.firebaseapp.com",
  projectId: "vue-firebase-2-31128",
  storageBucket: "vue-firebase-2-31128.firebasestorage.app",
  messagingSenderId: "645517401115",
  appId: "1:645517401115:web:6ffbbb0407528a63fb2cbe",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

export {auth, db};
