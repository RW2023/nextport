import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import anime from 'animejs';


const Hero = () => {
  const [isIconVisible, setIconVisible] = useState(true);

  useEffect(() => {
    // Existing animations
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

    anime({
      targets: '.text-bounce',
      translateY: [-10, 10],
      direction: 'alternate',
      loop: 3,
      duration: 800,
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
              <span className="color-animate">Hi!</span> 
              <i className="fa-solid fa-code fly-in-right"></i>
            </h1>
            <p className="py-6 text-headline text-bounce">
              <i className="fa-solid fa-globe top-globe"></i> 
              Welcome to my Website 
              <i className="fa-solid fa-globe bottom-globe"></i>
            </p>
            <button 
              className="btn btn-primary bg-tertiary text-black hover:text-white"
              onMouseOver={() => setIconVisible(false)}
              onMouseOut={() => setIconVisible(true)}
              style={{ transition: 'all 0.3s ease-in-out' }}
            >
              <i className="fa-solid fa-terminal" style={{ opacity: isIconVisible ? 1 : 0, transition: 'opacity 0.3s ease-in-out' }}></i> Come In! <i className="fas fa-door-open"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
