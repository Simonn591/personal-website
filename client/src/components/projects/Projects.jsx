import React, { useState, useEffect } from 'react';

import Project from '../project/Project';
import Project2 from '../project/Project2';
import Project3 from '../project/Project3';
import Project4 from '../project/Project4';
import './projects.css';
import axios from 'axios';

/* eslint-disable react/prop-types */

const Projects = ({ item }) => {
  const [data, setData] = useState([]);

  console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_API_URL + '/projects?populate=*',
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
    <div className="projects-all" id="projects">
      <div className="projects-container">
        <div className="projects-title">
          <h1>{item.attributes.projectsHeader}</h1>
        </div>
        <div className="projects-title-2">
          <h3>{item.attributes.projectsSubheader1}</h3>
        </div>
        <div className="projects-project">
          {data.map(item => (
            <React.Fragment key={item.id}>
              <Project4 item={item} />
              <Project item={item} />
            </React.Fragment>
          ))}
        </div>
        <div className="projects-title-2">
          <h3>{item.attributes.projectsSubheader2}</h3>
        </div>
        <div className="projects-project">
          {data.map(item => (
            <React.Fragment key={item.id}>
              <Project2 item={item} />
            </React.Fragment>
          ))}
        </div>
        <div className="projects-title-2">
          <h3>{item.attributes.projectsSubheader3}</h3>
        </div>
        <div className="projects-project">
          {data.map(item => (
            <React.Fragment key={item.id}>
              <Project3 item={item} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
