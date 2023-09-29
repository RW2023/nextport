// 'use client';
import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import anime from 'animejs';

const Hero = () => {
  const [isIconVisible, setIconVisible] = useState(true);

  useEffect(() => {
    // Existing animations
    anime({
      targets: '.color-animate',
      color: ['#FFF', '#DC8114', '#5616C5', '#FFF'],
      duration: 2000,
      loop: false,
      easing: 'easeInOutSine',
    });

    anime({
      targets: '.fly-in-left',
      translateX: [-1000, 0],
      duration: 2000,
      easing: 'easeOutExpo',
    });

    anime({
      targets: '.fly-in-right',
      translateX: [1000, 0],
      duration: 2000,
      easing: 'easeOutExpo',
    });

    anime({
      targets: '.top-globe',
      translateY: ['-1000%', '0%'],
      duration: 2000,
      easing: 'easeOutExpo',
    });

    anime({
      targets: '.bottom-globe',
      translateY: ['1000%', '0%'],
      duration: 2000,
      easing: 'easeOutExpo',
    });

    anime({
      targets: '.text-bounce',
      translateY: [-10, 10],
      direction: 'alternate',
      loop: 3,
      duration: 800,
      easing: 'easeOutExpo',
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="hero min-h-screen relative">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 min-w-full min-h-full object-cover z-[-1]"
          loop
          autoPlay
          muted
        >
          <source src="/morph.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay */}
        {/* <div className="hero-overlay bg-opacity-80"></div> */}
        {/* Content */}
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">
              <i className="fa-solid fa-code fly-in-left mr-4"></i>
              <span className="color-animate">Hi!</span>
              <i className="fa-solid fa-code fly-in-right ml-4"></i>
            </h1>
            <p className="py-6 text-headline text-bounce">
              <i className="fa-solid fa-globe top-globe mr-4"></i>{' '}
              {/* Added right margin to the first globe */}
              Welcome to my Website
              <i className="fa-solid fa-globe bottom-globe ml-4"></i>{' '}
              {/* Added left margin to the second globe */}
            </p>

            <button
              className="btn btn-primary bg-button text-black hover:text-white hover:border-button mt-3"
              onMouseOver={() => setIconVisible(false)}
              onMouseOut={() => setIconVisible(true)}
              style={{ transition: 'all 0.3s ease-in-out' }}
            >
              <i
                className="fa-solid fa-terminal"
                style={{
                  opacity: isIconVisible ? 1 : 0,
                  transition: 'opacity 0.3s ease-in-out',
                }}
              ></i>{' '}
              Come In! <i className="fas fa-door-open"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
