import React from 'react';
import { signInWithGoogle } from '../../../database/firebase';
import './buttonRegisterGoogle.css';
import googleIcon from '../../../images/google-icon.png'; // Pastikan ada gambar ikon Google

const ButtonRegisterGoogle = () => {
    const handleGoogleSignIn = () => {
        signInWithGoogle()
          .then((user) => {
            console.log('User signed in: ', user);
            // Redirect or perform other actions after successful login
            // For example: window.location.href = '/dashboard';
          })
          .catch((error) => {
            console.error('Error signing in with Google: ', error);
          });
    };

    return (
      <div>
          <button type="button" onClick={handleGoogleSignIn} className="google-register-button">
              <img src={googleIcon} alt="Google Icon" />
              Lanjutkan dengan Google
          </button>
      </div>
    );
};

export default ButtonRegisterGoogle;
