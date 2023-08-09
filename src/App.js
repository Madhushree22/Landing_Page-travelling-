import React from 'react';

import { AboutUs, SpecialOffer, FindUs, Gallery, Header, Packages, Founder, Designation,Awards } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Designation />
    <SpecialOffer />
    <Packages />
    <Founder />
    <Awards/>
    <Gallery />
    <FindUs />
    
    
    
  </div>
);

export default App;
