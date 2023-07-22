import React from 'react';
import profile_pic from '../../assets/Profile-pic.png'
import './home.css';

/* eslint-disable jsx-a11y/accessible-emoji */

const Home = () => {
  
  return (
    <div className='home-all'>
      <div className='home-container'>
        <div className='home-img'>
          <img src= { profile_pic } alt='profile-pic'/>
        </div>
        <div className='home-text'>
          <h1>Dobrý den,<span className='home-hand wave'>👋</span> jmenuji se <span className='home-name'>Šimon Marchal.</span></h1>
          <h3>Jsem junior front-end web developer se čtyřletou praxí v testingu a datové analýze.</h3>
        </div>

      </div>
    </div>
  )
}

export default Home