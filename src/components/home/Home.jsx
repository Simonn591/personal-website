import React from 'react';
import profile_pic from '../../assets/Profile-pic.png'
import './home.css';
import { useTranslation } from 'react-i18next';

/* eslint-disable jsx-a11y/accessible-emoji */

const Home = () => {
  
  const { t } = useTranslation();
  
  return (
    <div className='home-all'>
      <div className='home-container'>
        <div className='home-img'>
          <img src= { profile_pic } alt='profile-pic'/>
        </div>
        <div className='home-text'>
          <h1>{ t('home1') }<span className='home-hand wave'>👋</span> { t('home2') } <span className='home-name'>Šimon Marchal.</span></h1>
          <h3>{ t('home3') }</h3>
        </div>

      </div>
    </div>
  )
}

export default Home