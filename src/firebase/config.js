import { initializeApp } from 'firebase/app';
import 'firebase/compat/auth'
import 'firebase/firestore';
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAjKeRR2YyuZBm1dCjYyp0ruXmn5NpiQK4",
    authDomain: "olxclone-eecf6.firebaseapp.com",
    projectId: "olxclone-eecf6",
    storageBucket: "olxclone-eecf6.appspot.com",
    messagingSenderId: "933159885747",
    appId: "1:933159885747:web:f8f3df490b6b5213b349c6",
    measurementId: "G-1437350PEN"
  };

export default initializeApp(firebaseConfig)