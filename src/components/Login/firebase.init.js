// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBkm3wrqAF-ZQRyO-0yxLSZcm5vbXLyOhE",
    authDomain: "caretutor-abde4.firebaseapp.com",
    projectId: "caretutor-abde4",
    storageBucket: "caretutor-abde4.appspot.com",
    messagingSenderId: "78176520622",
    appId: "1:78176520622:web:a3e4b9fddf67de7e71e03f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;