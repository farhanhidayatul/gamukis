import React, { useState } from 'react';
import '../component_register_asset/inputConfirmPassword.css';

const InputConfirmPassword = ({ password, setConfirmPassword }) => {
  const [confirmPassword, setConfirmPasswordValue] = useState('');
  const [inputClass, setInputClass] = useState('input-empty');

  const handleChange = (event) => {
    const value = event.target.value;
    setConfirmPasswordValue(value);
    setConfirmPassword(value);

    if (value === '') {
      setInputClass('input-empty');
    } else if (value === password) {
      setInputClass('input-valid');
    } else {
      setInputClass('input-invalid');
    }
  };

  return (
    <div>
      <label className="label-password" htmlFor="confirmPassword">Konfirmasi Password</label>
      <input
        type="password"
        id="confirmPassword"
        value={confirmPassword}
        onChange={handleChange}
        className={`input-field-password-regist-2 ${inputClass}`}
      />
    </div>
  );
};

export default InputConfirmPassword;
