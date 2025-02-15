import React from "react";
import "./inputNamaSekolah.css"; // Tambahkan file CSS untuk styling

const InputNamaSekolah = ({ onChange }) => {
  return (
    <div>
    <label className="label-school" htmlFor="school">Nama Sekolah</label>
    <input type="text" className="input-sekolah" onChange={onChange} />
  </div>
  );
  
  
};

export default InputNamaSekolah;
