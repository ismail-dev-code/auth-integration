// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// DANGER DO NOT SHARE THIS CONFIG ON ONLINE

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqsYslfpKS6iUFSerZnDeNkNd6XFhRkeI",
  authDomain: "auth-integration-81adf.firebaseapp.com",
  projectId: "auth-integration-81adf",
  storageBucket: "auth-integration-81adf.firebasestorage.app",
  messagingSenderId: "976813124499",
  appId: "1:976813124499:web:ab1dbcb110df3f73529666"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);