import React, { useState } from 'react';
import '../component_login_asset/inputEmailUsername.css';

const InputEmailUsername = ({ setInputEmailUsername }) => {
  const [inputValue, setInputValue] = useState('');
  const [inputType, setInputType] = useState('username');
  const [inputClass, setInputClass] = useState('input-empty');

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    setInputEmailUsername(value);
    
    // Regex sederhana untuk mendeteksi email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmail = emailPattern.test(value);
    
    if (value.trim() === '') {
      setInputClass('input-empty');
    } else if (isEmail || value.length > 3) {
      setInputClass('input-valid');
    } else {
      setInputClass('input-invalid');
    }
    
    setInputType(isEmail ? 'email' : 'username');
  };

  return (
    <div>
      <label className="label-emailorusername" htmlFor="usernameOrEmail">Username atau Email</label>
      <input
        type="text"
        id="usernameOrEmail"
        value={inputValue}
        onChange={handleChange}
        className={`input-field-emailorusername ${inputClass}`}
      />
    </div>
  );
};

export default InputEmailUsername;
