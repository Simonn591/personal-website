import React from 'react';
import ReactMarkdown from 'react-markdown';

/* eslint-disable react/prop-types */

const Education = ({ item }) => {
  return (
    <div className="cv-education">
      <div className="cv-title-2">
        <h3>{item.attributes.headerEducation}</h3>
      </div>
      <section className="cv-timeline">
        <div className="cv-position">
          <h3>{item.attributes.educationName1}</h3>
          <p>
            <ReactMarkdown>{item.attributes.educationDesc1}</ReactMarkdown>
          </p>
        </div>
        <div className="cv-position">
          <h3>{item.attributes.educationName2}</h3>
          <p>
            <ReactMarkdown>{item.attributes.educationDesc2}</ReactMarkdown>
          </p>
        </div>
        <div className="cv-position">
          <h3>{item.attributes.educationName3}</h3>
          <p>
            <ReactMarkdown>{item.attributes.educationDesc3}</ReactMarkdown>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Education;
