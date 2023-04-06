import React from 'react';
import './project.css';
import img4 from '../../assets/project4.png';
import { useTranslation } from 'react-i18next';

const Project4 = () => {

  const { t } = useTranslation();

  return (   
   
   <a href= "https://www.figma.com/file/oHgbbYkFMJ7k9nJDMd3uwu/Sborio.cz-FE-enhancements?node-id=0%3A1&t=Bxwfcq1Ot7pOO5gP-0" target='_blank' rel="noopener noreferrer">
    
    <div className='project-all'>
  
        <img src= { img4 } className='project-img' alt='img4'/>
        
        <div className='project-text'>
          <span className='project-title'>
            <p>Sborio.cz</p>
          </span>
          <span className='project-desc'>
            <p>Některé úpravy a nové funkce front-endu projektu, se kterým ve volném čase pomáhám.</p>
          </span>
          <span className='project-tools'>
            <p>Figma, Bootstrap, CSS</p>
          </span>
        </div>
    </div>
    </a>
  )

}

export default Project4