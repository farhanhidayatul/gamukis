import React from 'react';
import { signInWithGoogle } from '../database/firebase'; // Import dengan benar
import './login.css';

const Login = () => {
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
    <div className="login-container">
      <div className="login-left">
        <img src="/path/to/your/image.png" alt="Illustration" className="login-image" />
      </div>
      <div className="login-right">
        <h2>Selamat datang di GAMUKIS</h2>
        <form>
          <input type="text" placeholder="Username atau Email" />
          <input type="password" placeholder="Password" />
          <div className="remember-me">
            <input type="checkbox" />
            <label>Remember me</label>
          </div>
          <button type="submit">Login</button>
          <button type="button" onClick={handleGoogleSignIn}>
            Lanjutkan dengan Google
          </button>
        </form>
        <a href="#">Lupa password?</a>
        <p>Belum punya akun? <a href="#">Daftar sekarang!!</a></p>
      </div>
    </div>
  );
};

export default Login;

