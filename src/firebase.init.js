import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDIadyDEhqq2G9agqqLzQ6gNyNWzGQpEUE",
  authDomain: "samiha-s-mehendi.firebaseapp.com",
  projectId: "samiha-s-mehendi",
  storageBucket: "samiha-s-mehendi.appspot.com",
  messagingSenderId: "822948239071",
  appId: "1:822948239071:web:7721293c054764be35bb6a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
