import React from 'react';
import './project.css';

import img4 from '../../assets/project4.png'

const Project4 = () => {

  return (   
   
   <a href= "https://www.figma.com/file/oHgbbYkFMJ7k9nJDMd3uwu/Sborio.cz-FE-enhancements?node-id=0%3A1&t=Bxwfcq1Ot7pOO5gP-0">
    
    <div className='project-all'>
  
        <img src= { img4 } className='project-img' alt='img4'/>
        
        <div className='project-text'>
          <span className='project-title'>
            <p>Sborio.cz</p>
          </span>
          <span className='project-desc'>
            <p>Some front-end enhancements of the project I'm currently participating in.</p>
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