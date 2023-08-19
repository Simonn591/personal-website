import React from 'react';
import './project.css';

/* eslint-disable react/prop-types */

const Project4 = ({ item }) => {
  return (
    <a
      href={item.attributes.project4link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="project-all">
        <img
          src={
            process.env.REACT_APP_UPLOAD_URL +
            item.attributes.project4img.data.attributes.url
          }
          className="project-img"
          alt="img4"
        />

        <div className="project-text">
          <span className="project-title">
            <p>{item.attributes.project4header}</p>
          </span>
          <span className="project-desc">
            <p>{item.attributes.project4desc}</p>
          </span>
          <span className="project-tools">
            <p>{item.attributes.project4stack}</p>
          </span>
        </div>
      </div>
    </a>
  );
};

export default Project4;
