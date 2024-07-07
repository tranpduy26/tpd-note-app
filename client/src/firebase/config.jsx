// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUeaMJXjEVAidcc7SvICSy5xQxfIwXWik",
  authDomain: "tpd-note-app.firebaseapp.com",
  projectId: "tpd-note-app",
  storageBucket: "tpd-note-app.appspot.com",
  messagingSenderId: "371640014920",
  appId: "1:371640014920:web:1291bf1a71957b4492607d",
  measurementId: "G-RV19RXDWR6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
