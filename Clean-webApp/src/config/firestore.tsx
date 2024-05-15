// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAalcR8RQiSXWwA35gDJLa6tOcJPdJghBQ",
  authDomain: "sweep-server.firebaseapp.com",
  projectId: "sweep-server",
  storageBucket: "sweep-server.appspot.com",
  messagingSenderId: "887147531297",
  appId: "1:887147531297:web:8d2c030f6e189540792760",
  measurementId: "G-SJSPXKZWYZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);
