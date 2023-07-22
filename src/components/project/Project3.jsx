import React from 'react';
import './project.css';
import img3 from '../../assets/project3.png';

const Project3 = () => {

  return (   
   
   <a href= "https://www.deviantart.com/simonn91" target='_blank' rel="noopener noreferrer">
    
    <div className='project-all'>
  
        <img src= { img3 } className='project-img' alt='img3'/>
        
        <div className='project-text'>
          <span className='project-title'>
            <p>3D portfolio</p>
          </span>
          <span className='project-desc'>
            <p>Také mě zajímá 3D grafika.</p>
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