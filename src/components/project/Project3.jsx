import React from 'react';
import './project.css';
import img3 from '../../assets/project3.png';
import { useTranslation } from 'react-i18next';

const Project3 = () => {

  const { t } = useTranslation();

  return (   
   
   <a href= "https://www.deviantart.com/simonn91" target='_blank' rel="noopener noreferrer">
    
    <div className='project-all'>
  
        <img src= { img3 } className='project-img' alt='img3'/>
        
        <div className='project-text'>
          <span className='project-title'>
            <p>{ t('project3title') }</p>
          </span>
          <span className='project-desc'>
            <p>{ t('project3desc') }</p>
          </span>
          <span className='project-tools'>
            <p>Blender</p>
          </span>
        </div>
    </div>
    </a>
  )

}

export default Project3