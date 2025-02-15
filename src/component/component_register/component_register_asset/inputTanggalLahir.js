import React, { useState } from "react";
import "./inputTanggalLahir.css"; // Pastikan file CSS tersedia

const InputTanggalLahir = ({ onChange }) => {
  const [date, setDate] = useState(["", ""]);
  const [month, setMonth] = useState(["", ""]);
  const [year, setYear] = useState(["", "", "", ""]);

  // Handler untuk mengubah nilai input
  const handleChange = (e, index, setValue, valueArray) => {
    const newValue = [...valueArray];
    newValue[index] = e.target.value;
    setValue(newValue);
    onChange(newValue.join("")); // Mengirimkan nilai gabungan ke parent
  };

  return (
    <div>
        <label className="label-birth" htmlFor="birth">Tanggal Lahir</label>
        <div className="tanggal-lahir-container">
            {/* DD */}
            {date.map((val, index) => (
                <input
                 key={`dd-${index}`}
                 type="text"
                 maxLength="1"         
                 placeholder="D"
                 value={val}
                 onChange={(e) => handleChange(e, index, setDate, date)}
                />
            ))}
            <span>/</span>

            {/* MM */}
            {month.map((val, index) => (
                <input
                 key={`mm-${index}`}
                 type="text"
                 maxLength="1"
                 placeholder="M"
                 value={val}
                 onChange={(e) => handleChange(e, index, setMonth, month)}
                />
            ))}
            <span>/</span>

            {/* YYYY */}
            {year.map((val, index) => (
                <input
                key={`yyyy-${index}`}
                type="text"
                maxLength="1"
                placeholder="Y"
                value={val}
                onChange={(e) => handleChange(e, index, setYear, year)}
                />
            ))}
        </div>
    </div>
    
  );
};

export default InputTanggalLahir;

