import React from 'react';
import './flashCard.css';

const Flashcards = ({ title }) => {
  return (
    <div className="flashcards">
      <h3>{title}</h3>
      <p>Jelajahi Keajaiban {title}</p>
      <ul>
        <li>Pengertian Biologi dan Biokimia</li>
        <li>Struktur dan Fungsi Sel</li>
        <li>Genetika Dasar</li>
        <li>Reproduksi</li>
        <li>Biologi Molekuler dan Seluler</li>
        <li>Imunitas dan Sistem Kekebalan</li>
      </ul>
    </div>
  );
};

export default Flashcards;
