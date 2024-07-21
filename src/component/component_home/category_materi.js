import React, { useState } from "react";
import "./category_materi.css";
import IsiMateri from "./category_materi_isi";
import { FaBook } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const KategoriMateri = () => {
  const [activeCategory, setActiveCategory] = useState("SAINTEK");
  const navigate = useNavigate();

  const saintekCards = [
    {
      title: "Biologi",
      icon: (
        <img
          className="icon icon-biologi"
          src={require("../../images/Vektor_Biologi.svg").default}
          alt="Biologi icon"
          draggable="false"
        />
      ),
      rating: 4.3,
      reviews: 112,
      description: "Placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
      subtitle: "Sains Biologi",
      features: ["Kritis", "Kreatif", "Kolaborasi", "Teknologi dan informasi"]
    },
    {
      title: "Kimia",
      icon: (
        <img
          className="icon icon-kimia"
          src={require("../../images/Vektor_Kimia.svg").default}
          alt="Kimia icon"
          draggable="false"
        />
      ),
      rating: 4.3,
      reviews: 112,
      description: "Placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
      subtitle: "Sains Kimia",
      features: ["Analitis", "Empatik", "Kolaboratif", "Inovatif"]
    },
    {
      title: "Fisika",
      icon: (
        <img
          className="icon icon-fisika"
          src={require("../../images/Vektor_Fisika.svg").default}
          alt="Fisika icon"
          draggable="false"
        />
      ),
      rating: 4.3,
      reviews: 112,
      description: "Placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
      subtitle: "Sains Fisika",
      features: ["Problem Solving", "Logical", "Scientific Thinking", "Innovative"]
    },
    {
      title: "Matematika",
      icon: (
        <img
          className="icon icon-matematika"
          src={require("../../images/Vektor_Matematika.svg").default}
          alt="Matematika icon"
          draggable="false"
        />
      ),
      rating: 4.3,
      reviews: 112,
      description: "Placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
      subtitle: "Sains Matematika",
      features: ["Analytical Thinking", "Quantitative Reasoning", "Problem Solving", "Abstract Thinking"]
    },
    {
      title: "Informatika",
      icon: (
        <img
          className="icon icon-informatika"
          src={require("../../images/Vektor_Logika_Matematika.svg").default}
          alt="Informatika icon"
          draggable="false"
        />
      ),
      rating: 4.3,
      reviews: 112,
      description: "Placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
      subtitle: "Sains Informatika",
      features: ["Computational Thinking", "Algorithmic Problem Solving", "System Design", "Technology Integration"]
    },
  ];

  const soshumCards = [
    {
      title: "Sejarah",
      icon: <FaBook />,
      rating: 4.3,
      reviews: 112,
      description: "Placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
      subtitle: "Ilmu Sejarah",
      features: ["Historical Analysis", "Critical Thinking", "Research Skills", "Contextual Understanding"]
    },
    {
      title: "Geografi",
      icon: <FaBook />,
      rating: 4.3,
      reviews: 112,
      description: "Placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
      subtitle: "Ilmu Geografi",
      features: ["Spatial Awareness", "Environmental Understanding", "Map Reading", "Data Analysis"]
    },
    {
      title: "Ekonomi",
      icon: <FaBook />,
      rating: 4.3,
      reviews: 112,
      description: "Placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
      subtitle: "Ilmu Ekonomi",
      features: ["Economic Analysis", "Financial Literacy", "Market Understanding", "Data Interpretation"]
    },
    {
      title: "Sosiologi",
      icon: <FaBook />,
      rating: 4.3,
      reviews: 112,
      description: "Placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
      subtitle: "Ilmu Sosiologi",
      features: ["Societal Analysis", "Critical Thinking", "Research Skills", "Contextual Understanding"]
    },
    {
      title: "Matematika",
      icon: <FaBook />,
      rating: 4.3,
      reviews: 112,
      description: "Placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
      subtitle: "Ilmu Matematika",
      features: ["Analytical Thinking", "Quantitative Reasoning", "Problem Solving", "Abstract Thinking"]
    },
  ];

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const handleMainkan = (card) => {
    const cardData = {
      title: card.title,
      logo: activeCategory === "SAINTEK" ? "logo_saintek" : "logo_soshum", // Use a string identifier for the logo
      subtitle: activeCategory === "SAINTEK" ? "Sains & Teknologi" : "Sosial & Hukum",
      description: card.description,
      features: card.features,
    };
    navigate(`/gamePage`, { state: { selectedCard: cardData } });
  };

  return (
    <div className="kategori-materi">
      <h1>Kategori Materi</h1>
      <p>
        Lorem ipsum is placeholder text commonly used in the graphic, print, and
        <br />
        publishing industries for previewing layouts and visual mockups.
      </p>

      <div className="categories">
        <button
          className={`category-button ${activeCategory === "SAINTEK" ? "active" : ""}`}
          onClick={() => handleCategoryClick("SAINTEK")}
        >
          <img
            src={require("../../images/logo_saintek.svg").default}
            alt="SAINTEK"
            draggable="false"
          />
          <h3>
            SAINTEK
            <br />
            <p>(Sains & Teknologi)</p>
          </h3>
        </button>
        <button
          className={`category-button ${activeCategory === "SOSHUM" ? "active" : ""}`}
          onClick={() => handleCategoryClick("SOSHUM")}
        >
          <img
            src={require("../../images/logo_soshum.svg").default}
            alt="SOSHUM"
            draggable="false"
          />
          <h3>
            SOSHUM
            <br />
            <p>(Sosial & Hukum)</p>
          </h3>
        </button>
      </div>

      {activeCategory === "SAINTEK" && <IsiMateri cards={saintekCards} onMainkan={handleMainkan} />}
      {activeCategory === "SOSHUM" && <IsiMateri cards={soshumCards} onMainkan={handleMainkan} />}
    </div>
  );
};

export default KategoriMateri;