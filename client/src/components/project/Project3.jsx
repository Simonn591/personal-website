import React from 'react';
import './project.css';

/* eslint-disable react/prop-types */

const Project3 = ({ item }) => {
  return (
    <a
      href={item.attributes.project3link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="project-all">
        <img
          src={
            process.env.REACT_APP_UPLOAD_URL +
            item.attributes.project3img.data.attributes.url
          }
          className="project-img"
          alt="img3"
        />

        <div className="project-text">
          <span className="project-title">
            <p>{item.attributes.project3header}</p>
          </span>
          <span className="project-desc">
            <p>{item.attributes.project3desc}</p>
          </span>
          <span className="project-tools">
            <p>{item.attributes.project3stack}</p>
          </span>
        </div>
      </div>
    </a>
  );
};

export default Project3;
