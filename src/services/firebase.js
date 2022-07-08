import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCGvBlaI2f0ushu5WGvgw8XddkvzHiW-sw",
  authDomain: "auth-example-41264.firebaseapp.com",
  projectId: "auth-example-41264",
  storageBucket: "auth-example-41264.appspot.com",
  messagingSenderId: "978397998188",
  appId: "1:978397998188:web:2c0102fb5e325f0eaffc49",
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
