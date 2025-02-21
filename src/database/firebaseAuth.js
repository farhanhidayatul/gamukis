import { getAuth, onAuthStateChanged, signInAnonymously, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "./firebaseConfig"; // Pastikan ini mengimpor app dari firebaseConfig.js

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Fungsi untuk mendeteksi perubahan status login
const observeAuthState = (callback) => {
  onAuthStateChanged(auth, (user) => {
    callback(user);
  });
};

// Fungsi untuk login dengan Google
const signInWithGoogle = () => {
  return signInWithPopup(auth, provider)
    .then((result) => {
      return result.user;
    })
    .catch((error) => {
      throw error;
    });
};

// Fungsi untuk login anonim
const signInAnon = () => {
  return signInAnonymously(auth)
    .then((result) => {
      return result.user;
    })
    .catch((error) => {
      throw error;
    });
};

// Pastikan semua fungsi yang diperlukan diekspor
export { auth, observeAuthState, signInWithGoogle, signInAnon, onAuthStateChanged };

