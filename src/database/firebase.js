import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously, onAuthStateChanged } from 'firebase/auth';
import { getDatabase, ref, set, update, onValue } from 'firebase/database';

// Firebase configuration
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

export const auth = getAuth(app);
export const database = getDatabase(app);
export const signInAnonymouslyFirebase = signInAnonymously;
export const onAuthStateChangedFirebase = onAuthStateChanged;
export const databaseRef = ref; // Reference function
export const setDatabase = set; // Set function
export const updateDatabase = update; // Update function
export const onValueDatabase = onValue; // onValue listener function

