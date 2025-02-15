import React from "react";
import "./inputAlamat.css"; // Tambahkan file CSS untuk styling

const InputAlamat = ({ onChange }) => {
  return (
  <div className="address-container">
    <label className="label-address" htmlFor="address">Alamat</label>
    <input type="text" className="input-alamat" onChange={onChange} />
  
  </div>
  
  );
};

export default InputAlamat;
