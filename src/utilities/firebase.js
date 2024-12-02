// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMLdvrTYgvV1flqVxsWlsgvs9xsonKVL4",
  authDomain: "netflixgpt-39549.firebaseapp.com",
  projectId: "netflixgpt-39549",
  storageBucket: "netflixgpt-39549.firebasestorage.app",
  messagingSenderId: "663321959139",
  appId: "1:663321959139:web:9503620b8ee65da1e383d6",
  measurementId: "G-FCZZX0MK3F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const auth = getAuth();
