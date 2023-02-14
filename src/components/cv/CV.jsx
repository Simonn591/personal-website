import React from 'react';
import './cv.css';
import { useTranslation } from 'react-i18next';

const CV = () => {

  const { t } = useTranslation();

  return (
    <div className='cv-all' id='cv'>
    <div className='cv-container'>
      <div className='cv-title'>
        <h1>CV</h1>
      </div>
      <div className='cv-grid'>
      <div className='cv-experience'>
        <div  className='cv-title-2'>
          <h3>Praxe</h3>
        </div>
        <section className='cv-timeline'>
          <div className='cv-position'>
            <h3>Front-end web developer & UX designer</h3>
            <h4>Sborio.cz</h4>
            <h5>2022 - dosud</h5>
            <p>Vývoj front-endu webového informačního systému.</p>
            <p></p>
            <p>UX a UI design nových funkčností.</p>
            <div className='cv-languages'>         
              <p>Figma, Bootstrap, CSS, Python</p>
            </div>
          </div>
          <div className='cv-position'>
            <h3>IT analytik</h3>
            <h4>Česká spořitelna a.s.</h4>
            <h5>2018 - 2022</h5>
            <p>Zajištění podpory uživatelů aplikací Tallyman a PowerCurve Collections v rámci banky.</p>
            <p>Manuální testování (evidence a tvorba scénářů v HP ALM a Xray).</p>
            <p>Analýza a implementace funkčních požadavků dle business zadání.</p>
            <div className='cv-languages'>         
              <p>Oracle SQL, Shell scripting</p>
            </div>
          </div>
          <div className='cv-position'>
            <h3>IT podpora</h3>
            <h4>Česká spořitelna a.s.</h4>
            <h5> 2018 - 2018</h5>
            <p>Podpora při vývoji a údržbě bankovního serveru.</p>
            <div className='cv-languages'>
              <p>T-SQL</p>
            </div>
          </div>
        </section>
      </div>
      <div className='cv-education'>
      <div className='cv-title-2'>
        <h3>Vzdělání</h3>
      </div>  
      <section className='cv-timeline'>
          <div className='cv-position'>
            <h3>Česká zemědělská univerzita v Praze</h3>
            <h5>2014 - 2018</h5>
            <p>Informatika (Bc.)</p>
          </div>
          <div className='cv-position'>
            <h3>Unicorn College</h3>
            <h5>2012 - 2013 (nedokončeno)</h5>
            <p>Informatika</p>
          </div>
          <div className='cv-position'>
            <h3>SOŠ civilního letectví</h3>
            <h5>2007 - 2011</h5>
            <p>Letecký mechanik - elektronik</p>
          </div>
          </section>
      </div>
      </div>
    </div>
  </div>
  )
}

export default CV