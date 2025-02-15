import React, { useState } from "react";
import ProgressBar from "./progressBar"; 
import "./registrationAccount.css"; 
import InputEmail from "./component_register_asset/inputEmail";
import InputUsername from "./component_register_asset/inputUsername";
import InputPassword from "./component_register_asset/inputPassword";
import InputConfirmPassword from "./component_register_asset/inputConfirmPassword";
import ButtonRegisterGoogle from "./component_register_asset/buttonRegisterGoogle";
import ButtonNext from "./component_register_asset/buttonNext";

const RegistrationAccount = ({ nextStep }) => {
  const [email, setEmail] = useState(""); // Tambahkan state email
  const [username, setUsername] = useState(""); // Tambahkan state username
  const [password, setPassword] = useState(""); // Tambahkan state password
  const [confirmPassword, setConfirmPassword] = useState(""); // Tambahkan state konfirmasi password

  return (
    <div className="register-form">
      <ProgressBar step={1} />
      <InputEmail setEmail={setEmail} />
      <InputUsername setUsername={setUsername} />
      <InputPassword setInputPassword={setPassword} />
      <InputConfirmPassword password={password} setConfirmPassword={setConfirmPassword} />
      <ButtonNext onClick={nextStep}/>
      <ButtonRegisterGoogle />
    </div>
  );
};

export default RegistrationAccount;
