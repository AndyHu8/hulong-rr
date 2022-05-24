import React from 'react';
import ReactDOM from 'react-dom/client';
import About from './About/About';
import Footer from './Footer/Footer';
import './GlobalStyles.css';
import Navigation from './Navigation/Navigation';
import Projects from './Projects/Projects';
import Startseite from './Startseite/Startseite';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navigation/>
    <Startseite/>
    <About/>
    <Projects/>
    <Footer/>
  </React.StrictMode>
);
