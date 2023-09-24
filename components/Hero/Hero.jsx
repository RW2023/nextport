import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import anime from 'animejs';


const Hero = () => {
  useEffect(() => {
    anime({
      targets: '.color-animate',
      color: ['#FFF', '#000', '#FF0000', '#FFF'],
      duration: 2000,
      loop: false,
      easing: 'easeInOutSine'
    });

    anime({
      targets: '.fly-in-left',
      translateX: [-1000, 0],
      duration: 2000,
      easing: 'easeOutExpo'
    });

    anime({
      targets: '.fly-in-right',
      translateX: [1000, 0],
      duration: 2000,
      easing: 'easeOutExpo'
    });

anime({
  targets: '.top-globe',
  translateY: ['-1000%', '0%'],
  duration: 2000,
  easing: 'easeOutExpo'
});

anime({
  targets: '.bottom-globe',
  translateY: ['1000%', '0%'],
  duration: 2000,
  easing: 'easeOutExpo'
});

  }, []);

  return (
    <>
      <Navbar />
      <div className="hero min-h-screen" style={{backgroundImage: 'url(/img/freepikbg2.jpg)'}}>
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">
              <i className="fa-solid fa-code fly-in-left"></i> 
              <span className="color-animate">Hello</span> 
              <i className="fa-solid fa-code fly-in-right"></i>
            </h1>
            <p className="py-6 text-headline">
              <i className="fa-solid fa-globe top-globe"></i> 
              Welcome to my Portfolio Website 
              <i className="fa-solid fa-globe bottom-globe"></i>
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
