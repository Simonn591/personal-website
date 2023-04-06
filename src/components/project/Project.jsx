import React from 'react';
import './project.css';

import { useTranslation } from 'react-i18next';

import img1 from '../../assets/project1.png'

const Project = () => {

  const { t } = useTranslation();

  return (   
   
   <a href= "https://github.com/Simonn591/Band-page" target='_blank' rel="noopener noreferrer">
    
    <div className='project-all'>
  
        <img src= { img1 } className='project-img' alt='img1'/>
        
        <div className='project-text'>
          <span className='project-title'>
            <p>Stránky kapely</p>
          </span>
          <span className='project-desc'>
            <p>Zdrojový kód React aplikace, která bude sloužit jako webové stránky kapely.</p>
          </span>
          <span className='project-tools'>
            <p>React, SCSS</p>
          </span>
        </div>
    </div>
    </a>
  )

}

export default Project