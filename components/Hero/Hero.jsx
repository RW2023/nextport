import React from 'react';
import Navbar from '../Navbar/Navbar';

const Hero = () => {
  return (
    <>
      <Navbar />
      <div data-theme="dark" className="navbar bg-base-100">
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content text-center">
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
      </div>
    </>
  );
};

export default Hero;
