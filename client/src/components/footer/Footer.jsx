import React from 'react';
import ReactMarkdown from 'react-markdown';
import './footer.css';

/* eslint-disable react/prop-types */

const Footer = ({ item }) => {
  return (
    <div className="footer-all">
      <div className="footer-container">
        <div className="footer-menu">
          <>
            <p>
              <a href="#navbar">
                <ReactMarkdown>{item.attributes.footer1}</ReactMarkdown>
              </a>
            </p>
          </>
        </div>
        <h3>
          <ReactMarkdown>{item.attributes.footer2}</ReactMarkdown>
        </h3>
      </div>
    </div>
  );
};

export default Footer;
