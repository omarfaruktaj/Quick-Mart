// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

interface CustomImportMeta extends ImportMetaEnv {
  VITE_APIKEY: string;
  VITE_AUTHDOMAIN: string;
  VITE_PROJECTID: string;
  VITE_STORAGEBUCKET: string;
  VITE_MESSAGINGSENDERID: string;
  VITE_APPID: string;
}

const customMeta = import.meta.env as CustomImportMeta;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: customMeta.VITE_APIKEY,
  authDomain: customMeta.VITE_AUTHDOMAIN,
  projectId: customMeta.VITE_PROJECTID,
  storageBucket: customMeta.VITE_STORAGEBUCKET,
  messagingSenderId: customMeta.VITE_MESSAGINGSENDERID,
  appId: customMeta.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
