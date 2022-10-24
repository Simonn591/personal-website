import React, { useState } from 'react';
import DarkMode from '../darkmode/DarkMode';
import './navbar.css';

const Menu = () => (
  <>
  <p><a href = '#contact'>Contact</a></p>
  <p><a href = '#skills'>Skills</a></p>
  <p><a href = '#projects'>Projects</a></p>
  <p><a href = '#cv'>CV</a></p>
  </>
)

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);
  
  return (
    <div className='navbar-all' id='navbar'>
      <div className='navbar-container'>
        <div className='navbar-title'>
          <h1>&lt;Š /&gt;</h1>
        </div>
        <div className='navbar-right'>
          <Menu />
        </div>

        <div className='navbar-menu'>
          {toggleMenu
            ? <p onClick={() => setToggleMenu(false)} className='navbar-menu-close'>×</p>
            : <p onClick={() => setToggleMenu(true)} className='navbar-menu-lines'>≡</p>
          }
          {toggleMenu && (
            <div className='navbar-menu_container swing-in-top-fwd'>
              <div className='navbar-menu_container-links'>
                <Menu />
              </div>
            </div>
          )}
        </div>

        <div className='navbar-darkmode'>
          <DarkMode />
        </div>
      </div>
    </div>
  )
}

export default Navbar