import React, { useState, useEffect, Suspense } from 'react';
import {
  Navbar,
  Home,
  Links,
  Skills,
  Projects,
  CV,
  Footer,
} from './components';
import './App.css';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_API_URL + '/portfolios?populate=*',
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
    <div className="app-all">
      <Suspense fallback={null}>
        {data.map(item => (
          <div key={item.id}>
            <Navbar item={item} />
            <Home item={item} />
            <Links item={item} />
            <Skills item={item} />
            <Projects item={item} />
            <CV item={item} />
          </div>
        ))}
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
