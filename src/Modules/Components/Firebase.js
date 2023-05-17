import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA3qGgT1CEU-lj0RyyT-2FiqBDhhL61nb8",
    authDomain: "liquidation-sell.firebaseapp.com",
    projectId: "liquidation-sell",
    storageBucket: "liquidation-sell.appspot.com",
    messagingSenderId: "665169547715",
    appId: "1:665169547715:web:422a66cabb88bdb1cead76",
    measurementId: "G-T0NCY5ZG5X"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };