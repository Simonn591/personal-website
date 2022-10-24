import React from 'react';
import { Navbar, Home, Links, Skills, Projects, CV, Footer } from './components';
import './App.css';

const App = () => {

  return (
      <div className='app-all'>
        <Navbar />
        <Home />
        <Links />
        <Skills />
        <Projects />
        <CV />
        <Footer />
      </div>
  )
}

export default App