import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue, onDisconnect, remove, update, push } from 'firebase/database';
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signInAnonymously } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDj8cRmHIn90q5pFE5Kjbvrwxel6bQSPww",
  authDomain: "ujicoba-52016.firebaseapp.com",
  databaseURL: "https://ujicoba-52016-default-rtdb.firebaseio.com",
  projectId: "ujicoba-52016",
  appId: "1:681887347941:web:4943d7139fda3edc93500c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
  return signInWithPopup(auth, provider)
    .then((result) => {
      return result.user; // Return user for further handling
    })
    .catch((error) => {
      throw error; // Throw error for further handling
    });
};

export { 
  app, 
  database, 
  auth, 
  ref, 
  set, 
  onValue, 
  onDisconnect, 
  remove, 
  update, 
  push, 
  signInAnonymously, 
  onAuthStateChanged, 
  signInWithGoogle 
};


