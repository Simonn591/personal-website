import React, { useState, useEffect } from 'react';
import './cv.css';
import axios from 'axios';
import Experience from './experience';
import Education from './education';

/* eslint-disable react/prop-types */

const CV = ({ item }) => {
  const [data, setData] = useState([]);

  console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_API_URL + '/cvs?populate=*',
          {
            headers: {
              authorization: 'Bearer ' + process.env.REACT_APP_API_TOKEN,
            },
          }
        );
        setData(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="cv-all" id="cv">
      <div className="cv-container">
        <div className="cv-title">
          <h1>CV</h1>
        </div>
        <div className="cv-grid">
          {data.map(item => (
            <React.Fragment key={item.id}>
              <Experience item={item} />
              <Education item={item} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CV;
