import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDFOHX1UZ6pGTE1tJoepKKVRR6Oiim1ivs",
  authDomain: "vetapp-demoday.firebaseapp.com",
  projectId: "vetapp-demoday",
  storageBucket: "vetapp-demoday.appspot.com",
  messagingSenderId: "366830254890",
  appId: "1:366830254890:web:ebdbe46a26f627d3d3bc53",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export { db, googleAuthProvider, facebookAuthProvider, firebase };
