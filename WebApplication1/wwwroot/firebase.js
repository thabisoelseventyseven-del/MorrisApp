// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBHYlrMmQ13t0LEorg89DM4XLy1yb53Ieg",
    authDomain: "morrisapp-d3b62.firebaseapp.com",
    projectId: "morrisapp-d3b62",
    storageBucket: "morrisapp-d3b62.firebasestorage.app",
    messagingSenderId: "100081989856",
    appId: "1:100081989856:web:b53a52e2a6173eb1fab885",
    measurementId: "G-CP1PTCZV6D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);