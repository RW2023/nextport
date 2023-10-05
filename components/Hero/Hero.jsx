// Hero.js
// 'use client';
import React, { useEffect, useState, useRef } from 'react';
import Navbar from '../Navbar/Navbar'; // Adjust this path if needed
import anime from 'animejs'; // Make sure animejs is installed
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  const [isIconVisible, setIconVisible] = useState(true);
  const videoRef = useRef(null);

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

    // Hide placeholder image when video starts playing
    const videoElement = videoRef.current;
    const handleVideoPlay = () => {
      document.getElementById('video-placeholder').style.display = 'none';
    };

    videoElement.addEventListener('play', handleVideoPlay);

    return () => {
      videoElement.removeEventListener('play', handleVideoPlay);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="hero min-h-screen relative pt-15">
        {/* Background Placeholder Image */}
        <Image
          src="/img/backgroundPlaceholderBlue.png" // Corrected path and filename
          id="video-placeholder"
          className="absolute top-0 left-0 min-w-full min-h-full object-cover z-[-1]"
          width={500}
          height={500}
          alt="Video Placeholder"
        />

        {/* Background Video */}
        <video
          ref={videoRef}
          className="absolute top-0 left-0 min-w-full min-h-full object-cover z-[-1]"
          loop
          autoPlay
          muted
        >
          <source src="/morph.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Content */}
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h2 className="text-4xl text-headline">
              <span className="fa-solid fa-hand m-3 text-nubian text-8xl"></span>
              Hi I am{' '}
            </h2>
            <h1 className="text-5xl font-bold">
              <i className="fa-solid fa-laptop-code fly-in-left mr-4"></i>
              <span className="color-animate">Ryan</span>
              <i className="fa-solid fa-laptop-code fly-in-right ml-4"></i>
            </h1>
            <p className="py-6 text-headline text-bounce">
              <i className="fa-solid fa-globe top-globe mr-4"></i>
              Welcome to my WebApp
              <i className="fa-solid fa-globe bottom-globe ml-4"></i>
            </p>
            <Link href="/welcome">
              <div
                className="btn btn-primary border-stroke bg-button text-black hover:text-white hover:border-stroke mt-3"
                role="button"
                tabIndex={0}
              >
                <i
                  className="fa-solid fa-terminal"
                  style={{
                    opacity: isIconVisible ? 1 : 0,
                    transition: 'opacity 0.3s ease-in-out',
                  }}
                ></i>
                Come In! <i className="fas fa-door-open"></i>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
