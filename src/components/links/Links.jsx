import React from 'react';
import './links.css';
import {
  mailDark,
  linkedinDark,
  mailLight,
  linkedinLight,
  gitDark,
  gitLight,
} from './imports';

const Links = () => {
  return (
    <div className="links-all" id="contact">
      <div className="links-container">
        <div className="links-mail">
          <a href="mailto:simon.marchal2@gmail.com">
            <img className="links-mail-dark" src={mailDark} alt="mail" />
            <img className="links-mail-light" src={mailLight} alt="mail" />
          </a>
        </div>
        <div className="links-linkedin">
          <a
            href="https://www.linkedin.com/in/%C5%A1imon-marchal-441690144"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="links-linkedin-dark"
              src={linkedinDark}
              alt="linkedin"
            />
            <img
              className="links-linkedin-light"
              src={linkedinLight}
              alt="linkedin"
            />
          </a>
        </div>
        <div className="links-git">
          <a
            href="https://github.com/Simonn591"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="links-git-dark" src={gitDark} alt="git" />
            <img className="links-git-light" src={gitLight} alt="git" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Links;
