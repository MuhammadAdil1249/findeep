import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB2VfoLf0do_hnKT1vCtO_7MB7JxX6qRJQ",
  authDomain: "auth-fintech.firebaseapp.com",
  projectId: "auth-fintech",
  storageBucket: "auth-fintech.appspot.com",
  messagingSenderId: "960005166571",
  appId: "1:960005166571:web:ff3919b04b43cf4858b5ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
