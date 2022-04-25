// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBZz9xqG0aZteZ8pUSQymKwA-1d5juiuo",
  authDomain: "bahor-restoran.firebaseapp.com",
  projectId: "bahor-restoran",
  storageBucket: "bahor-restoran.appspot.com",
  messagingSenderId: "559891115336",
  appId: "1:559891115336:web:feb96163cb237d28ccd77d"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()