import React, { useState } from 'react';
import DarkMode from '../darkmode/DarkMode';
import Language from '../language/Language';
import './navbar.css';
import { useTranslation } from 'react-i18next';


const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);
  const { t } = useTranslation();
  const a = null
  
  return (
    <div className='navbar-all' id='navbar'>
      <div className='navbar-container'>
        <div className='navbar-title'>
          <h1>&lt;Š /&gt;</h1>
        </div>
        <div className='navbar-right'>
        <>
          <p><a href = '#contact'>Kontakt</a></p>
          <p><a href = '#skills'>Dovednosti</a></p>
          <p><a href = '#projects'>Projekty</a></p>
          <p><a href = '#cv'>CV</a></p>
        </>
        </div>

        <div className='navbar-menu'>
          {toggleMenu
            ? <p onClick={() => setToggleMenu(false)} className='navbar-menu-close'>×</p>
            : <p onClick={() => setToggleMenu(true)} className='navbar-menu-lines'>≡</p>
          }
          {toggleMenu && (
            <div className='navbar-menu_container swing-in-top-fwd'>
              <div className='navbar-menu_container-links'>
              <>
                <p><a href = '#contact'>Kontakt</a></p>
                <p><a href = '#skills'>Dovednosti</a></p>
                <p><a href = '#projects'>Projekty</a></p>
                <p><a href = '#cv'>CV</a></p>
              </>
              </div>
            </div>
          )}
        </div>

        <div className='navbar-language'>
          <Language />
        </div>

        <div className='navbar-darkmode'>
          <DarkMode />
        </div>
        
      </div>
    </div>
  )
}

export default Navbar