import React from 'react';
import './project.css';

/* eslint-disable react/prop-types */

const Project = ({ item }) => {
  return (
    <a
      href={item.attributes.project1link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="project-all">
        <img
          src={
            process.env.REACT_APP_UPLOAD_URL +
            item.attributes.project1img.data.attributes.url
          }
          className="project-img"
          alt="img1"
        />

        <div className="project-text">
          <span className="project-title">
            <p>{item.attributes.project1header}</p>
          </span>
          <span className="project-desc">
            <p>{item.attributes.project1desc}</p>
          </span>
          <span className="project-tools">
            <p>{item.attributes.project1stack}</p>
          </span>
        </div>
      </div>
    </a>
  );
};

export default Project;
