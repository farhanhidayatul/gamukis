import React, { useState } from "react";
import "./category_materi.css";
import IsiMateri from "./category_materi_isi";
import { FaBook } from "react-icons/fa";

const KategoriMateri = () => {
  const [activeCategory, setActiveCategory] = useState("SAINTEK");

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
      description:
        "Placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
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
      description:
        "Placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
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
      description:
        "Placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
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
      description:
        "Placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
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
      description:
        "Placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    },
  ];

  const soshumCards = [
    {
      title: "Sejarah",
      icon: <FaBook />,
      rating: 4.3,
      reviews: 112,
      description:
        "Placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    },
    {
      title: "Geografi",
      icon: <FaBook />,
      rating: 4.3,
      reviews: 112,
      description:
        "Placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    },
    {
      title: "Ekonomi",
      icon: <FaBook />,
      rating: 4.3,
      reviews: 112,
      description:
        "Placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    },
    {
      title: "Sosiologi",
      icon: <FaBook />,
      rating: 4.3,
      reviews: 112,
      description:
        "Placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    },
    {
      title: "Matematika",
      icon: <FaBook />,
      rating: 4.3,
      reviews: 112,
      description:
        "Placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    },
  ];

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
          className={`category-button ${
            activeCategory === "SAINTEK" ? "active" : ""
          }`}
          onClick={() => setActiveCategory("SAINTEK")}
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
          className={`category-button ${
            activeCategory === "SOSHUM" ? "active" : ""
          }`}
          onClick={() => setActiveCategory("SOSHUM")}
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

      {activeCategory === "SAINTEK" && <IsiMateri cards={saintekCards} />}
      {activeCategory === "SOSHUM" && <IsiMateri cards={soshumCards} />}
    </div>
  );
};

export default KategoriMateri;
