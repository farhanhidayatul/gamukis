import React, { useState } from 'react';
import './category_materi.css';
import IsiMateri from './category_materi_isi';
import { FaBook } from 'react-icons/fa';
import BiologiIcon from "../images/Vektor_Biologi.svg"
import KimiaIcon from "../images/Vektor_Kimia.svg"
import FisikaIcon from "../images/Vektor_Fisika.svg"
import MatematikaIcon from "../images/Vektor_Matematika.svg"
import InformatikaIcon from "../images/Vektor_Logika_Matematika.svg"
import SaintekIcon from "../images/logo_saintek.svg"
import SoshumIcon from "../images/logo_soshum.svg"

const KategoriMateri = () => {
  const [activeCategory, setActiveCategory] = useState('SAINTEK');

  const saintekCards = [
    {
      title: "Biologi",
      icon: <img src={BiologiIcon} alt='icon'/>,
      rating: 4.3,
      reviews: 112,
      description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
    },
    {
      title: "Kimia",
      icon: <img src={KimiaIcon} alt='icon' />,
      rating: 4.3,
      reviews: 112,
      description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
    },
    {
      title: "Fisika",
      icon: <img src={FisikaIcon} alt='icon' />,
      rating: 4.3,
      reviews: 112,
      description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
    },
    {
      title: "Matematika",
      icon: <img src={MatematikaIcon} alt='icon'/>,
      rating: 4.3,
      reviews: 112,
      description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
    },
    {
      title: "Informatika",
      icon: <img src={InformatikaIcon} alt='icon'/>,
      rating: 4.3,
      reviews: 112,
      description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
    },
  ];

  const soshumCards = [
    {
      title: "Sejarah",
      icon: <FaBook />,
      rating: 4.3,
      reviews: 112,
      description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
    },
    {
      title: "Geografi",
      icon: <FaBook />,
      rating: 4.3,
      reviews: 112,
      description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
    },
    {
      title: "Ekonomi",
      icon: <FaBook />,
      rating: 4.3,
      reviews: 112,
      description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
    },
    {
      title: "Sosiologi",
      icon: <FaBook />,
      rating: 4.3,
      reviews: 112,
      description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
    },
    {
        title: "Matematika",
        icon: <FaBook />,
        rating: 4.3,
        reviews: 112,
        description: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
    },

  ];

  return (
    <div className="kategori-materi">
      <h1>Kategori Materi</h1>
      <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and <br/> 
        publishing industries for previewing layouts and visual mockups.</p>
      
      <div className="categories">
        <button
          className={`category-button ${activeCategory === 'SAINTEK' ? 'active' : ''}`}
          onClick={() => setActiveCategory('SAINTEK')}
        >
            <img src={SaintekIcon} alt='icon'/>
            <h3>SAINTEK <br/> <p>(Sains & Teknologi)</p></h3>
            
        </button>
        <button
          className={`category-button ${activeCategory === 'SOSHUM' ? 'active' : ''}`}
          onClick={() => setActiveCategory('SOSHUM')}
        >
            <img src={SoshumIcon} alt='icon'/>
            <h3>SOSHUM <br/><p>(Sosial & Hukum)</p></h3>
        </button>
      </div>
      
      {activeCategory === 'SAINTEK' && <IsiMateri cards={saintekCards} />}
      {activeCategory === 'SOSHUM' && <IsiMateri cards={soshumCards} />}
    </div>
  );
};

export default KategoriMateri;




