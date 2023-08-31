import React from 'react';
import ReactMarkdown from 'react-markdown';

/* eslint-disable react/prop-types */

const Experience = ({ item }) => {
  return (
    <div className="cv-experience">
      <div className="cv-title-2">
        <h3>{item.attributes.headerJobs}</h3>
      </div>
      <section className="cv-timeline">
        <div className="cv-position">
          <h3>{item.attributes.jobName1}</h3>
          <p>
            <ReactMarkdown>{item.attributes.jobDesc1}</ReactMarkdown>
          </p>
        </div>
        <div className="cv-position">
          <h3>{item.attributes.jobName2}</h3>
          <p>
            <ReactMarkdown>{item.attributes.jobDesc2}</ReactMarkdown>
          </p>
        </div>
        <div className="cv-position">
          <h3>{item.attributes.jobName3}</h3>
          <p>
            <ReactMarkdown>{item.attributes.jobDesc3}</ReactMarkdown>
          </p>
        </div>
        <div className="cv-position">
          <h3>{item.attributes.jobName4}</h3>
          <p>
            <ReactMarkdown>{item.attributes.jobDesc4}</ReactMarkdown>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Experience;
