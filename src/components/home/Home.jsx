import React from 'react';
import profile_pic from '../../assets/Profile-pic.png'
import './home.css';

const Home = () => {
  return (
    <div className='home-all'>
      <div className='home-container'>
        <div className='home-img'>
          <img src= { profile_pic } alt='profile-pic'/>
        </div>
        <div className='home-text'>
          <h1>Hello, <span className='home-hand wave'>👋</span> my name is <span className='home-name'>Šimon<br/>Marchal.</span></h1>
          <h3>I'm a self-taught frontend web developer with four years of experience in testing and data analysis.</h3>
        </div>

      </div>
    </div>
  )
}

export default Home