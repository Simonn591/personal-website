import React from 'react';
import './project.css';

/* eslint-disable react/prop-types */

const Project2 = ({ item }) => {
  return (
    <a
      href={item.attributes.project2link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="project-all">
        <img
          src={
            process.env.REACT_APP_UPLOAD_URL +
            item.attributes.project2img.data.attributes.url
          }
          className="project-img"
          alt="img2"
        />

        <div className="project-text">
          <span className="project-title">
            <p>{item.attributes.project2header}</p>
          </span>
          <span className="project-desc">
            <p>{item.attributes.project2desc}</p>
          </span>
          <span className="project-tools">
            <p>{item.attributes.project2stack}</p>
          </span>
        </div>
      </div>
    </a>
  );
};

export default Project2;
