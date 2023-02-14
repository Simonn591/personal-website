import React from 'react';

import Project from '../project/Project';
import Project2 from '../project/Project2';
import Project3 from '../project/Project3';
import Project4 from '../project/Project4';
import './projects.css';

import { useTranslation } from 'react-i18next';

const Projects = () => {

  const { t } = useTranslation();
  return (
    <div className='projects-all' id='projects'>
      <div className='projects-container'>
        <div className='projects-title'>
          <h1>Projekty</h1>
      </div>
      <div className='projects-title-2'>
        <h3>Vývoj webu</h3>
      </div>
      <div className='projects-project'>
        <Project4 />
        <Project />
      </div>
      <div className='projects-title-2'>
        <h3>UX/UI design</h3>
      </div>
      <div className='projects-project'>
        <Project2 />
      </div>
      <div className='projects-title-2'>
        <h3>Ostatní</h3>        
      </div>
      <div className='projects-project'>
        <Project3 />
      </div>
    </div>
    </div>
  )
}


export default Projects