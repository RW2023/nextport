import React from 'react'
import image  from 'next/image'
import NextLogo from '../NextLogo/NextLogo'

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-4 sm:p-10 bg-black text-primary-content">
        <aside className="text-center">
          <p className="font-bold text-xl sm:text-2xl">
            Ryan Wilson <br />
            Full Stack Developer
            <i className="fa-solid fa-layer-group ml-4 text-2xl sm:text-1xl"></i>
          </p>
          <p className="font-bold">Technologies</p>
          <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4">
            <div className="flex flex-col items-center">
              <i className="fab fa-js-square text-2xl sm:text-3xl text-yellow-400"></i>
              <p>JavaScript</p>
            </div>
            <div className="flex flex-col items-center">
              <i className="fab fa-html5 text-2xl sm:text-3xl text-orange-500"></i>
              <p>HTML5</p>
            </div>
            <div className="flex flex-col items-center">
              <i className="fab fa-css3 text-2xl sm:text-3xl text-blue-500"></i>
              <p>CSS3</p>
            </div>
            <div className="flex flex-col items-center">
              <i className="fab fa-react text-2xl sm:text-3xl text-blue-300"></i>
              <p>React</p>
            </div>
            <div className="flex flex-col items-center">
              <NextLogo />
              <p>Next.js</p>
            </div>
            <div className="flex flex-col items-center">
              <i className="fab fa-node-js text-2xl sm:text-3xl text-green-600"></i>
              <p>Node.js</p>
            </div>
          </div>
          <div className="flex justify-center space-x-2 sm:space-x-4 mt-2">
            <i className="fab fa-github text-2xl sm:text-3xl text-headline-900"></i>
            <i className="fab fa-linkedin text-2xl sm:text-3xl text-blue-600"></i>
            <i className="fab fa-discord text-2xl sm:text-3xl text-purple-600"></i>
          </div>
          <p className="mt-2">
            Copyright © 2023 - Ryan Wilson - All rights reserved
          </p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
