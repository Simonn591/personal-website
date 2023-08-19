import React from 'react';
import './links.css';

/* eslint-disable react/prop-types */

const Links = ({ item }) => {
  return (
    <div className="links-all" id="contact">
      <div className="links-container">
        <div className="links-mail">
          <a
            href={item.attributes.link1}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="links-mail-dark"
              src={
                process.env.REACT_APP_UPLOAD_URL +
                item.attributes.linkImgDark1.data.attributes.url
              }
              alt="mail"
            />
            <img
              className="links-mail-light"
              src={
                process.env.REACT_APP_UPLOAD_URL +
                item.attributes.linkImg1.data.attributes.url
              }
              alt="mail"
            />
          </a>
        </div>
        <div className="links-linkedin">
          <a
            href={item.attributes.link2}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="links-linkedin-dark"
              src={
                process.env.REACT_APP_UPLOAD_URL +
                item.attributes.linkImgDark2.data.attributes.url
              }
              alt="linkedin"
            />
            <img
              className="links-linkedin-light"
              src={
                process.env.REACT_APP_UPLOAD_URL +
                item.attributes.linkImg2.data.attributes.url
              }
              alt="linkedin"
            />
          </a>
        </div>
        <div className="links-git">
          <a
            href={item.attributes.link3}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="links-git-dark"
              src={
                process.env.REACT_APP_UPLOAD_URL +
                item.attributes.linkImgDark3.data.attributes.url
              }
              alt="git"
            />
            <img
              className="links-git-light"
              src={
                process.env.REACT_APP_UPLOAD_URL +
                item.attributes.linkImg3.data.attributes.url
              }
              alt="git"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Links;
