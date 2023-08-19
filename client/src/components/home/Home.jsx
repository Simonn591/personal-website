import React from 'react';
import './home.css';
import ReactMarkdown from 'react-markdown';

// eslint-disable jsx-a11y/accessible-emoji
/* eslint-disable react/prop-types */

const Home = ({ item }) => {
  console.log(item);

  return (
    <div className="home-all">
      <div className="home-container">
        <div className="home-img">
          <img src={item.attributes.homeImg} alt="profile-pic" />
        </div>
        <div className="home-text">
          <h1>
            {item.attributes.homeHeader1}
            <span className="home-hand wave">👋</span>{' '}
            {item.attributes.homeHeader2}
            <br />
            <span className="home-name">{item.attributes.homeHeader3}</span>
          </h1>
          <h3>
            <ReactMarkdown>{item.attributes.homeDesc}</ReactMarkdown>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
