// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.APIKEY,
  authDomain: import.meta.AUTHDOMAIN,
  projectId: import.meta.PROJECTID,
  storageBucket: import.meta.STORAGEBUCKET,
  messagingSenderId: import.meta.MESSAGINGSENDERID,
  appId: import.meta.APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
