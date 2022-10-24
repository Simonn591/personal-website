import React from 'react';

import './cv.css'

const CV = () => {
  return (
    <div className='cv-all' id='cv'>
    <div className='cv-container'>
      <div className='cv-title'>
        <h1>CV</h1>
      </div>
      <div className='cv-grid'>
      <div className='cv-experience'>
        <div  className='cv-title-2'>
          <h3>Experience</h3>
        </div>
        <section className='cv-timeline'>
          <div className='cv-position'>
            <h3>IT analyst</h3>
            <h4>Česká spořitelna a.s.</h4>
            <h5>2018 - 2022</h5>
            <p>User support of the banking application specialized for collections administration.</p>
            <p>Analysis and implementation of user requested changes including design of screens during frontend upgrade.</p>
            <p>Testing (execution and writing of test scenarios).</p>
            <div className='cv-languages'>         
              <p>Oracle SQL, Shell scripting</p>
            </div>
          </div>
          <div className='cv-position'>
            <h3>IT support</h3>
            <h4>Česká spořitelna a.s.</h4>
            <h5> 2018 - 2018</h5>
            <p>Development and maintenance support of a bank server.</p>
            <div className='cv-languages'>
              <p>T-SQL</p>
            </div>
          </div>
        </section>
      </div>
      <div className='cv-education'>
      <div className='cv-title-2'>
        <h3>Education</h3>
      </div>  
      <section className='cv-timeline'>
          <div className='cv-position'>
            <h3>Czech University of Life Sciences Prague</h3>
            <h5>2014 - 2018</h5>
            <p>Informatics (bachelor's degree)</p>
          </div>
          <div className='cv-position'>
            <h3>Unicorn College</h3>
            <h5>2012 - 2013 (unfinished)</h5>
            <p>Informatics</p>
          </div>
          <div className='cv-position'>
            <h3>SOŠ civilního letectví</h3>
            <h5>2007 - 2011</h5>
            <p>Aircraft mechanics - electronics</p>
          </div>
          </section>
      </div>
      </div>
    </div>
  </div>
  )
}

export default CV