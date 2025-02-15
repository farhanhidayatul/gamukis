import React, { useState } from "react";
import "./checkboxJenisKelamin.css"; // Tambahkan file CSS untuk styling

const CheckboxJenisKelamin = ({ onChange }) => {
  const [selected, setSelected] = useState("");

  const handleSelect = (gender) => {
    setSelected(gender);
    if (onChange) {
      onChange(gender);
    }
  };

  return (
    <div>
        <label className="checkbox-gender" htmlFor="gender">Jenis Kelamin</label>
        <div className="gender-container">
             <label className={`gender-option ${selected === "Laki-laki" ? "selected" : ""}`} onClick={() => handleSelect("Laki-laki")}>
                <span className="circle-gender"></span> Laki-laki
            </label>
            <label className={`gender-option ${selected === "Perempuan" ? "selected" : ""}`} onClick={() => handleSelect("Perempuan")}>
                <span className="circle-gender"></span> Perempuan
            </label>
        </div>
    </div>
    
  );
};

export default CheckboxJenisKelamin;
