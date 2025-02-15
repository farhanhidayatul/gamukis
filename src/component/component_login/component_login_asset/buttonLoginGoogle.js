import React from 'react';
import { signInWithGoogle } from '../../../database/firebase';
import '../component_login_asset/buttonLoginGoogle.css';
import googleIcon from '../../../images/google-icon.png'; // Pastikan ada gambar ikon Google

const ButtonLoginGoogle = () => {
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
          <button type="button" onClick={handleGoogleSignIn} className="google-login-button">
              <img src={googleIcon} alt="Google Icon" />
              Lanjutkan dengan Google
          </button>
      </div>
    );
};

export default ButtonLoginGoogle;
