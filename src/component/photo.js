import React from 'react';
import '../photo.css';
import photo from '../images/Gamukis.png';

const Foto = ({ src, alt }) => {
  return (
    <div className="photo-container">
      <img src={photo} alt={alt} className="photo" />
    </div>
  );
}

export default Foto;