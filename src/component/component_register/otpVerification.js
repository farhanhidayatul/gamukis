import React, { useState, useEffect } from "react";
import "./otpVerification.css";
import ProgressBar from "./progressBar";
import ButtonNext from "./component_register_asset/buttonNext";

const OTPVerification = () => {
  const [countdown, setCountdown] = useState(60); // Timer 60 detik
  const [resendDisabled, setResendDisabled] = useState(true); // Cegah spam klik
  
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer); // Bersihkan timer saat unmount
    } else {
      setResendDisabled(false); // Aktifkan tombol kirim ulang
    }
  }, [countdown]);

  const handleResend = () => {
    setCountdown(60); // Reset timer ke 60 detik
    setResendDisabled(true); // Nonaktifkan tombol kembali
  };

  return (
    <div className="otpVerification-container">
      <ProgressBar step={3} />
      <p className="text-desc">
        Kami telah mengirimkan kode verifikasi ke email Anda. Silakan periksa email Anda dan masukkan kode tersebut di bawah ini untuk melanjutkan.
      </p>

      {/* Kotak OTP */}
      <div className="otp-box">
        {[...Array(5)].map((_, i) => (
          <input key={i} type="text" maxLength="1" className="otp-input" />
        ))}
      </div>

      {/* Timer Hitung Mundur */}
      {countdown > 0 ? (
        <p className="countdown-text">
        Tidak menerima email? <span className="countdown-highlight">{countdown}s</span>
      </p>
      ) : (
        <button className="resend-button" onClick={handleResend} disabled={resendDisabled}>
          Kirim Ulang Kode
        </button>
      )}

      <ButtonNext />
    </div>
  );
};

export default OTPVerification;

