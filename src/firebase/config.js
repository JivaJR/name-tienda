// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCS6HdaJYsDu_mWO2GeRwzsG_qNFHL-60Q",
    authDomain: "tienda-online-de13f.firebaseapp.com",
    projectId: "tienda-online-de13f",
    storageBucket: "tienda-online-de13f.appspot.com",
    messagingSenderId: "146112113743",
    appId: "1:146112113743:web:e04a330a8ef101b09ece3a",
    measurementId: "G-VYCKT565Q9"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
const analytics = getAnalytics(FirebaseApp);