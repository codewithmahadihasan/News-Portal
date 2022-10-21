// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAsmg3rTUF-dsFk6A0plSiVx47VKct0v5A",
    authDomain: "news-portal-03.firebaseapp.com",
    projectId: "news-portal-03",
    storageBucket: "news-portal-03.appspot.com",
    messagingSenderId: "1070957171601",
    appId: "1:1070957171601:web:3f184d4f0e589772998030",
    measurementId: "G-N6E3VD0YD6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;