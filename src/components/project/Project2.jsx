import React from 'react';
import './project.css';
import img2 from '../../assets/project2.png';

const Project2 = () => {
  return (
    <a
      href="https://is.czu.cz/zp/index.pl?podrobnosti_zp=217230;zpet=;prehled=vyhledavani;vzorek_zp=marchal;dohledat=Dohledat;kde=nazev;kde=autor;kde=klic_slova;stav_filtr=bez;typ=1;typ=2;typ=3;typ=101;typ=8;typ=7;fakulta=20;fakulta=41;fakulta=40;fakulta=71;fakulta=50;fakulta=73;fakulta=72;fakulta=10;fakulta=30;obhajoba=2018;jazyk=1;jazyk=3;jazyk=2;jazyk=-1"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="project-all">
        <img src={img2} className="project-img" alt="img2" />

        <div className="project-text">
          <span className="project-title">
            <p>Sociální síť pro muzikanty</p>
          </span>
          <span className="project-desc">
            <p>
              Moje bakalářská práce. UI specifikace webové aplikace zaměřené na
              pořádání koncertů.
            </p>
          </span>
          <span className="project-tools">
            <p>Autodesk Sketchbook Express, MockFlow, Gimp</p>
          </span>
        </div>
      </div>
    </a>
  );
};

export default Project2;
