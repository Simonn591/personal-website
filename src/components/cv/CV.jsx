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
          <h3>{ t('cv1') }</h3>
        </div>
        <section className='cv-timeline'>
          <div className='cv-position'>
            <h3>Front-end web developer & UX designer</h3>
            <h4>Sborio.cz</h4>
            <h5>{ t('cv3') }</h5>
            <p>{ t('cv4') }</p>
            <p></p>
            <p>{ t('cv5') }</p>
            <div className='cv-languages'>         
              <p>Figma, Bootstrap, CSS, Python</p>
            </div>
          </div>
          <div className='cv-position'>
            <h3>{ t('cv6') }</h3>
            <h4>Česká spořitelna a.s.</h4>
            <h5>2018 - 2022</h5>
            <p>{ t('cv7') }</p>
            <p>{ t('cv8') }</p>
            <p>{ t('cv9') }</p>
            <div className='cv-languages'>         
              <p>Oracle SQL, Shell scripting</p>
            </div>
          </div>
          <div className='cv-position'>
            <h3>{ t('cv10') }</h3>
            <h4>Česká spořitelna a.s.</h4>
            <h5> 2018 - 2018</h5>
            <p>{ t('cv11') }</p>
            <div className='cv-languages'>
              <p>T-SQL</p>
            </div>
          </div>
        </section>
      </div>
      <div className='cv-education'>
      <div className='cv-title-2'>
        <h3>{ t('cv2') }</h3>
      </div>  
      <section className='cv-timeline'>
          <div className='cv-position'>
            <h3>{ t('cv12') }</h3>
            <h5>2014 - 2018</h5>
            <p>{ t('cv13') }</p>
          </div>
          <div className='cv-position'>
            <h3>Unicorn College</h3>
            <h5>{ t('cv14') }</h5>
            <p>{ t('cv15') }</p>
          </div>
          <div className='cv-position'>
            <h3>SOŠ civilního letectví</h3>
            <h5>2007 - 2011</h5>
            <p>{ t('cv16') }</p>
          </div>
          </section>
      </div>
      </div>
    </div>
  </div>
  )
}

export default CV