import React from 'react';
import ReactDOM from 'react-dom/client';
import About from './About/About';
import './GlobalStyles.css';
import Navigation from './Navigation/Navigation';
import Startseite from './Startseite/Startseite';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navigation/>
    <Startseite/>
    <About/>
  </React.StrictMode>
);
