import React from "react";
import "./introductionRegistration.css"

const IntroductionRegistration = ({ nextStep }) => {
  return (
    <div>
        <h2 className="welcome-text-students">Selamat datang Students, di <span className="highlight">GAMUKIS!!</span></h2>
        <div className="welcome-text">
            <p>Gamukis adalah platform game edukasi yang menguji pengetahuan saintek, soshum, dan teknologi secara interaktif.</p>
            <hr class="custom-line"></hr>
            <ul>
                <li>Meningkatkan Pengetahuan: Gamukis membantu memperluas wawasan dalam saintek, soshum, dan teknologi.</li>
                <li>Pembelajaran Interaktif: Metode permainan yang menarik membuat proses belajar menjadi lebih menyenangkan.</li>
                <li>Pengembangan Keterampilan: Melatih kemampuan berpikir kritis dan problem-solving melalui tantangan dalam game.</li>
                <li>Kompetisi Sehat: Memungkinkan pemain bersaing secara positif dengan teman dan pengguna lainnya, mendorong motivasi belajar.</li>
            </ul>
        </div>
        <button className="next-button-1" onClick={nextStep}>Lanjutkan →</button>
    </div>
  );
};

export default IntroductionRegistration;
