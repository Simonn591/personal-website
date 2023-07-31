import React, { useState, useEffect } from 'react';
import profilePic from '../../assets/Profile-pic.png';
import './home.css';
import axios from 'axios';

// eslint-disable jsx-a11y/accessible-emoji

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Define the API endpoint URL from where you want to fetch data
    const apiUrl = process.env.REACT_APP_API_URL + '/portfolio'; // Replace with your Strapi API endpoint
    console.log(apiUrl);
    // Fetch data using axios
    axios
      .get(apiUrl)
      .then(response => {
        setData(response.data);
        console.log(data.home);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="home-all">
      <div className="home-container">
        <div className="home-img">
          <img src={profilePic} alt="profile-pic" />
        </div>
        <div className="home-text">
          <h1>
            Dobrý den,<span className="home-hand wave">👋</span> jmenuji se{' '}
            <span className="home-name">Šimon Marchal.</span>
          </h1>
          <h1></h1>
          <h3>
            Jsem junior front-end web developer se čtyřletou praxí v testingu a
            datové analýze.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
