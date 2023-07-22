import React from 'react';
import './darkmode.css';

// eslint-disable jsx-a11y/accessible-emoji

const setDark = () => {
  localStorage.setItem('theme', 'dark');
  document.documentElement.setAttribute('data-theme', 'dark');
};

const setLight = () => {
  localStorage.setItem('theme', 'light');
  document.documentElement.setAttribute('data-theme', 'light');
};

const defaultDark = 'dark';

if (defaultDark) {
  setDark();
}

const DarkMode = () => {
  return (
    <div className="toggle-theme-wrapper">
      <span className="darkmode-moon" onClick={setLight}>
        🌝
      </span>
      <span className="darkmode-sun" onClick={setDark}>
        🌞
      </span>
    </div>
  );
};

export default DarkMode;
