// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBtgWdivtswC4NnspPur0uoePk3UPARlYs",
  authDomain: "easy-92978.firebaseapp.com",
  projectId: "easy-92978",
  storageBucket: "easy-92978.appspot.com",
  messagingSenderId: "1722318548",
  appId: "1:1722318548:web:cc5a848d9353dd7bd50541",
  measurementId: "G-N31QSLNQLQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database 
const database = getDatabase(app);

export { database };
