import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBr6R2d1-zCH195vopJgpYuS1FDlHel88k",
  authDomain: "pratilipi-assignment-e6dc0.firebaseapp.com",
  databaseURL: "https://pratilipi-assignment-e6dc0.firebaseio.com",
  projectId: "pratilipi-assignment-e6dc0",
  storageBucket: "pratilipi-assignment-e6dc0.appspot.com",
  messagingSenderId: "694850217133",
  appId: "1:694850217133:web:a7ef74b0e500c37a185224",
  measurementId: "G-6MJCM2M43X"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
