import React from 'react';
import BackgroundKanan from '../component/component_login/backgroundKanan';
import './login.css';
import BackgroundKiri from '../component/component_login/backgroundKiri';

const Login = () => {
  return (
    <div className="login-container">
      <BackgroundKanan/>
      <BackgroundKiri/>
    </div>
  );
};

export default Login;

