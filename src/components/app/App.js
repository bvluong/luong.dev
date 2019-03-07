import React, { useState } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import About from '../about/about.js';
import Header from '../header/header.js';
import Interview from '../interview/interview.js';
import Portfolio from '../portfolio/portfolio.js';
import Nav from '../nav/nav.js';

export default function App() {
  
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Header/>
        <div className="mainView">
          <Route exact path ="/" component={About}/>
          <Route exact path ="/interview" component={Interview}/>
          <Route exact path ="/portfolio" component={Portfolio}/>
        </div>
        <Nav/>
      </div>
    </BrowserRouter>
  );
}


