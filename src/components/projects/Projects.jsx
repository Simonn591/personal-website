import React from 'react';

import Project from '../project/Project';
import Project2 from '../project/Project2';
import Project3 from '../project/Project3';
import Project4 from '../project/Project4';
import './projects.css';

const Projects = () => {

  return (
    <div className='projects-all' id='projects'>
      <div className='projects-container'>
        <div className='projects-title'>
          <h1>Projects</h1>
      </div>
      <div className='projects-title-2'>
        <h3>UX/UI design</h3>
      </div>
      <div className='projects-project'>
        <Project2 />
        <Project4 />
      </div>
      <div className='projects-title-2'>
        <h3>Others</h3>        
      </div>
      <div className='projects-project'>
        <Project />
        <Project3 />
      </div>
    </div>
    </div>
  )
}


export default Projects