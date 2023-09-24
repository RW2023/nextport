import React from 'react';
import Navbar from '../Navbar/Navbar';

const Hero = () => {
  return (
    <>
      <Navbar />
      <div className="hero min-h-screen" style={{backgroundImage: 'url(/img/freepikbg2.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">
              <i className="fa-solid fa-code"></i> Hello <i className="fa-solid fa-code"></i>
            </h1>
            <p className="py-6">
              <i className="fa-solid fa-globe"></i> Welcome to my Portfolio Website <i className="fa-solid fa-globe"></i>
            </p>
            <button className="btn btn-primary">
              <i className="fa-solid fa-terminal"></i> Come In! <i className="fas fa-door-open"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
