import React, { useState } from "react";
import "./register.css";
import IntroductionRegistration from "../component/component_register/introductionRegistration";
import RegistrationAccount from "../component/component_register/registrationAccount";
import PersonalInfo from "../component/component_register/personalInfo";
import OTPVerification from "../component/component_register/otpVerification";
import GamukisLogo from "../images/gamukis_vector.png"
import AssetGamukis from "../images/gamukis-regist-1.png"

const RegisterPage = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className="register-container">
      <div className="register-bg-assesoris">
        <div className="register-left">
          <img src={GamukisLogo} alt="GAMUKIS Logo" className="logo" />
          <img src={AssetGamukis} alt="AssetRegist" className="logo-regist" />
          <div className="circle-1"></div>
          <div className="circle-2"></div>
        </div>

        <div className="register-right">
          {step === 1 && <IntroductionRegistration nextStep={nextStep} />}
          {step === 2 && <RegistrationAccount nextStep={nextStep} />}
          {step === 3 && <PersonalInfo nextStep={nextStep} />}
          {step === 4 && <OTPVerification />}
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

