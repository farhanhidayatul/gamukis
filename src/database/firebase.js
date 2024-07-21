// firebase.js
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue, onDisconnect, remove, update } from 'firebase/database';
import { getAuth, onAuthStateChanged, signInAnonymously } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDj8cRmHIn90q5pFE5Kjbvrwxel6bQSPww",
  authDomain: "ujicoba-52016.firebaseapp.com",
  databaseURL: "https://ujicoba-52016-default-rtdb.firebaseio.com",
  projectId: "ujicoba-52016",
  storageBucket: "ujicoba-52016.appspot.com",
  messagingSenderId: "681887347941",
  appId: "1:681887347941:web:4943d7139fda3edc93500c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

export { app, database, auth, ref, set, onValue, onDisconnect, remove, update, signInAnonymously, onAuthStateChanged };
