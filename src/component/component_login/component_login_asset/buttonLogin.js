import React, { useState, useEffect } from 'react';
import '../component_login_asset/buttonLogin.css';

const ButtonLogin = ({ inputEmailUsername = '', inputPassword = '' }) => {
  const [isFilled, setIsFilled] = useState(false);

  useEffect(() => {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputEmailUsername);
    const isUsernameValid = inputEmailUsername.length > 3;
    const isPasswordValid = inputPassword.length >= 6;
    
    setIsFilled((isEmailValid || isUsernameValid) && isPasswordValid);
  }, [inputEmailUsername, inputPassword]);

  const buttonClass = isFilled ? 'button-filled' : 'button-empty';

  return (
    <div>
      <button type="submit" className={`login-button ${buttonClass}`} disabled={!isFilled}>
        Login
      </button>
    </div>
  );
};

export default ButtonLogin;


