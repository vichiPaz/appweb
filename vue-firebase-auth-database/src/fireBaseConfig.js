import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC92WRht8eyV1sYdvzTCru6v-BepOAUH_4",
  authDomain: "vue-firebase-2-31128-afb7c.firebaseapp.com",
  projectId: "vue-firebase-2-31128-afb7c",
  storageBucket: "vue-firebase-2-31128-afb7c.firebasestorage.app",
  messagingSenderId: "501569443145",
  appId: "1:501569443145:web:f9707c0544df869974f698",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db};