import React from 'react';

import Project from '../project/Project';
import Project2 from '../project/Project2';
import Project3 from '../project/Project3';
import './projects.css';

const Projects = () => {

  return (
    <div className='projects-all' id='projects'>
      <div className='projects-container'>
        <div className='projects-title'>
          <h1>Projects</h1>
      </div>
      <div className='projects-project'>
        <Project />
        <Project2 />
        <Project3 />
      </div>
    </div>
    </div>
  )
}


export default Projects