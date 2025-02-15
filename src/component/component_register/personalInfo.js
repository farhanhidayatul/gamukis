import React, { useState } from "react";
import "./personalInfo.css"
import ProgressBar from "./progressBar";
import CheckboxJenisKelamin from "./component_register_asset/checkboxJenisKelamin";
import InputTanggalLahir from "./component_register_asset/inputTanggalLahir";
import InputNamaSekolah from "./component_register_asset/inputNamaSekolah";
import InputAlamat from "./component_register_asset/inputAlamat";
import ButtonNext from "./component_register_asset/buttonNext";
import ButtonRegisterGoogle from "./component_register_asset/buttonRegisterGoogle";

const PersonalInfo = ({ nextStep }) => {
  const [gender, setGender] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [school, setSchool] = useState("");
  const [address, setAddress] = useState("");

  return (
    <div className="personalInfo-form">
      <ProgressBar step={2} />

      {/* Jenis Kelamin */}
      <CheckboxJenisKelamin onChange={setGender} />

      {/* Tanggal Lahir */}
      <InputTanggalLahir onChange={(e) => setBirthDate(e.target.value)} />

      {/* Nama Sekolah */}
      <InputNamaSekolah onChange={(e) => setSchool(e.target.value)} />

      {/* Alamat */}
      <InputAlamat onChange={(e) => setAddress(e.target.value)} />

      {/* Tombol Lanjutkan */}
      <ButtonNext onClick={nextStep} />
      <ButtonRegisterGoogle />
    </div>
  );
};

export default PersonalInfo;
