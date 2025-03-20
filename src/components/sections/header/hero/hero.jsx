import React from 'react';
import './hero.css';
import FlightSearch from './FlightSearch';

function Hero({comp}) {
  return (
    <div className="heroContainer">
      <div className="heroContent">
        <h1 className="title">FickleFlight</h1>
        <p className="subtitle">Let's explore & travel the world</p>

        {comp}
      </div>
    </div>
  );
}

export default Hero;
