import React from 'react';
import './skills.css';
import ReactMarkdown from 'react-markdown';

/* eslint-disable react/prop-types */

const Skills = ({ item }) => {
  return (
    <div className="skills-all" id="skills">
      <div className="skills-container">
        <div className="skills-title">
          <h1>{item.attributes.skillsHeader}</h1>
        </div>
        <div className="skills-skills">
          <ReactMarkdown className="skills-skills-1">
            {item.attributes.skillsText1}
          </ReactMarkdown>
          <ReactMarkdown className="skills-skills-2">
            {item.attributes.skillsText2}
          </ReactMarkdown>
          <ReactMarkdown className="skills-skills-3">
            {item.attributes.skillsText3}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default Skills;
