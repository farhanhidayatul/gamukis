import React, { useState } from 'react';
import '../component_register_asset/inputEmail.css';

const InputEmail = ({ setEmail }) => {
  const [email, setEmailValue] = useState('');
  const [inputClass, setInputClass] = useState('input-empty');

  const handleChange = (event) => {
    const value = event.target.value;
    setEmailValue(value);
    setEmail(value);

    // Regex untuk validasi email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setInputClass(value.trim() === '' ? 'input-empty' : emailPattern.test(value) ? 'input-valid' : 'input-invalid');
  };

  return (
    <div>
      <label className="label-email" htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={handleChange}
        className={`input-field-email-regist ${inputClass}`}
      />
    </div>
  );
};

export default InputEmail;

