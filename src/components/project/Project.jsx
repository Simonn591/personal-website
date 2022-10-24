import React from 'react';
import './project.css';

import img1 from '../../assets/project1.png'

const Project = () => {

  return (   
   
   <a href= "https://github.com/Simonn591/Band-page" target='_blank' rel="noreferrer">
    
    <div className='project-all'>
  
        <img src= { img1 } className='project-img' alt='img1'/>
        
        <div className='project-text'>
          <span className='project-title'>
            <p>Rock band's website</p>
          </span>
          <span className='project-desc'>
            <p>A React app consinsting of multiple pages.</p>
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