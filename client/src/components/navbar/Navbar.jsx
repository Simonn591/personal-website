import React, { useState } from 'react';
import DarkMode from '../darkmode/DarkMode';
import Language from '../language/Language';
import './navbar.css';

/* eslint-disable react/prop-types */

const Navbar = ({ item }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar-all" id="navbar">
      <div className="navbar-container">
        <div className="navbar-title">
          <h1>{item.attributes.logo}</h1>
        </div>
        <div className="navbar-right">
          <>
            <p>
              <a href="#contact">{item.attributes.navbar1}</a>
            </p>
            <p>
              <a href="#skills">{item.attributes.navbar2}</a>
            </p>
            <p>
              <a href="#projects">{item.attributes.navbar3}</a>
            </p>
            <p>
              <a href="#cv">{item.attributes.navbar4}</a>
            </p>
          </>
        </div>

        <div className="navbar-menu">
          {toggleMenu ? (
            <p
              onClick={() => setToggleMenu(false)}
              className="navbar-menu-close"
            >
              ×
            </p>
          ) : (
            <p
              onClick={() => setToggleMenu(true)}
              className="navbar-menu-lines"
            >
              ≡
            </p>
          )}
          {toggleMenu && (
            <div className="navbar-menu_container swing-in-top-fwd">
              <div className="navbar-menu_container-links">
                <>
                  <p>
                    <a href="#contact">{item.attributes.navbar1}</a>
                  </p>
                  <p>
                    <a href="#skills">{item.attributes.navbar2}</a>
                  </p>
                  <p>
                    <a href="#projects">{item.attributes.navbar3}</a>
                  </p>
                  <p>
                    <a href="#cv">{item.attributes.navbar4}</a>
                  </p>
                </>
              </div>
            </div>
          )}
        </div>

        <div className="navbar-language">
          <Language />
        </div>

        <div className="navbar-darkmode">
          <DarkMode />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
