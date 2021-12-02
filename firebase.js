//import firebase from 'firebase/app'
//import 'firebase/firestore'
//import 'firebase/auth'

//import { FirebaseApp, initializeApp } from "firebase/app";
//import { getAuth } from "firebase/auth";
//import { getDatabase } from "firebase/database";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
 
//import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDtNLUemx0p7qxfdIowmECsTF46npqkALw",
    authDomain: "vconnect-byaj84.firebaseapp.com",
    projectId: "vconnect-byaj84",
    storageBucket: "vconnect-byaj84.appspot.com",
    messagingSenderId: "29656657590",
    appId: "1:29656657590:web:ad18bfc5082495c9ba8017"
  };

  const app = !firebase.apps.length 
        ? firebase.initializeApp(firebaseConfig)
        : firebase.app()
  
 //const app = firebase.initializeApp(config)
 //// const app = initializeApp(firebaseConfig);
   
  const db = app.firestore();
  const auth = app.auth();
  //const auth = firebase.auth();

  //const db = getDatabase(app);

  //const auth = getAuth(app);

  const provider = new firebase.auth.GoogleAuthProvider();
  
  //export {db , auth , provider};
  export {db , auth, provider };