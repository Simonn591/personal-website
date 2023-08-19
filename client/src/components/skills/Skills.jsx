import React from 'react';
import './skills.css';

/* eslint-disable react/prop-types */

const Skills = ({ item }) => {
  return (
    <div className="skills-all" id="skills">
      <div className="skills-container">
        <div className="skills-title">
          <h1>{item.attributes.skillsHeader}</h1>
        </div>
        <div className="skills-skills">
          <div className="skills-skills-1">{item.attributes.skillsText1}</div>
          <div className="skills-skills-2">{item.attributes.skillsText2}</div>
          <div className="skills-skills-3">{item.attributes.skillsText3}</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
