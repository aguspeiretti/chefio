// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDphRDpN-jB8gqGBshNpfiPYIHVCGOfaMM",
  authDomain: "chefio-76afd.firebaseapp.com",
  projectId: "chefio-76afd",
  storageBucket: "chefio-76afd.appspot.com",
  messagingSenderId: "1063880155877",
  appId: "1:1063880155877:web:5084cbdf84f77a8f50aa0c",
  measurementId: "G-ZDJYWNFF9Q",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
