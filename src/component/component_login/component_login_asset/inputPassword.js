
import React, { useState } from 'react';
import '../component_login_asset/inputPassword.css';

const InputPassword = ({setInputPassword}) => {
  const [password, setPassword] = useState('');
  const [inputClass, setInputClass] = useState('input-empty');

  const handleChange = (event) => {
    const value = event.target.value;
    setPassword(value);
    setInputPassword(value);
    
    if (value === '') {
      setInputClass('input-empty');
    } else if (value.length >= 6) {
      setInputClass('input-valid');
    } else {
      setInputClass('input-invalid');
    }
  };

  return (
    <div>
      <label className="label-password" htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={handleChange}
        className={`input-field-password ${inputClass}`}
      />
    </div>
  );
};

export default InputPassword;