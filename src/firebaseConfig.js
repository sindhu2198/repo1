// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBXn15dzuI5VXAUqSjhyQt5yEQ7F0ynf7U",
    authDomain: "portfolio-299d7.firebaseapp.com",
    projectId: "portfolio-299d7",
    storageBucket: "portfolio-299d7.appspot.com",
    messagingSenderId: "529801482398",
    appId: "1:529801482398:web:dbced8c0cc125e7ebf2b8f",
    measurementId: "G-WFNJ30SSWD"
  };

  const app = initializeApp(firebaseConfig);
  const storage = getStorage(app);
  
  export { storage };