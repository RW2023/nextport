import React from 'react';
import Navbar from '../Navbar/Navbar';
import Card from '../Card/Card';

const Hero = () => {
  return (
    <>
      <Navbar />
      <div data-theme="halloween" className="navbar bg-base-100">
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Greetings</h1>
              <p className="py-6">Welcome to my Portfolio Website</p>
              <button className="btn btn-primary">Come In!</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

