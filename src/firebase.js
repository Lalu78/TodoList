import firebase from "firebase";
    
 const firebaseConfig = {
    apiKey: "AIzaSyADgAmhnp4Yu-XWH-wVSCOEEoA7XSroNz0",
    authDomain: "form-85d17.firebaseapp.com",
    projectId: "form-85d17",
    storageBucket: "form-85d17.appspot.com",
    messagingSenderId: "101255004070",
    appId: "1:101255004070:web:bf6f48240a1a8d0590d967"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();  

export {db,auth,storage}