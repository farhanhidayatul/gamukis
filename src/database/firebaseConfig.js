import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDj8cRmHIn90q5pFE5Kjbvrwxel6bQSPww",
  authDomain: "ujicoba-52016.firebaseapp.com",
  databaseURL: "https://ujicoba-52016-default-rtdb.firebaseio.com",
  projectId: "ujicoba-52016",
  appId: "1:681887347941:web:4943d7139fda3edc93500c",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { app, database, auth, provider };
