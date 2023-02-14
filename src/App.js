import React, { FC,Suspense } from 'react';
import { Navbar, Home, Links, Skills, Projects, CV, Footer } from './components';
import './App.css';
import './i18n'

const App : FC = () => {

  return (
      <div className='app-all'>
        <Suspense fallback={null}>
          <Navbar />
          <Home />
          <Links />
          <Skills />
          <Projects />
          <CV />
          <Footer />
        </Suspense>
      </div>
  )
}

export default App