import React from 'react';
import Image from 'next/image';
import NextLogo from '../NextLogo/NextLogo';
import ReactLogo from '../ReactLogo/ReactLogo';
import NodeLogo from '../NodeLogo/NodeLogo';
import CssLogo from '../CssLogo/CssLogo';
import HtmlLogo from '../HtmlLogo/HtmlLogo';
import JsLogo from '../JsLogo/JsLogo';
import TypscriptLogo from '../TypescriptLogo/TypscriptLogo';
import Figma from '../Figma/Figma';
import Git from '../Git/Git';
import Mongo from '../Mongo/Mongo';
import Link from 'next/link';

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
          <p className="font-bold">Tech I am Proficient in</p>
          <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4">
            <div className="flex flex-col items-center">
              <Git />
              <p>Git</p>
            </div>
            <div className="flex flex-col items-center">
              <JsLogo />
              <p>JavaScript</p>
            </div>
            <div className="flex flex-col items-center">
              <TypscriptLogo />
              <p>Typescript</p>
            </div>
            <div className="flex flex-col items-center">
              <HtmlLogo />
              <p>HTML5</p>
            </div>
            <div className="flex flex-col items-center">
              <CssLogo />
              <p>CSS3</p>
            </div>
            <div className="flex flex-col items-center">
              <Figma />
              <p>Figma</p>
            </div>
            <div className="flex flex-col items-center">
              <ReactLogo />
              <p>React</p>
            </div>
            <div className="flex flex-col items-center">
              <NextLogo />
              <p>Next.js</p>
            </div>
            <div className="flex flex-col items-center">
              <NodeLogo />
              <p>Node.js</p>
            </div>
            <div className="flex flex-col items-center">
              <Mongo />
              <p>MongoDb</p>
            </div>
          </div>
          <div className="flex justify-center space-x-2 sm:space-x-4 mt-2">
            <Link href="https://github.com/RW2023" aria-label="GitHub">
              <i className="fab fa-github text-2xl sm:text-3xl text-headline-900"></i>
            </Link>
            <Link
              href="https://www.linkedin.com/in/ryan-e-wilson/"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin text-2xl sm:text-3xl text-blue-600"></i>
            </Link>
            <Link href="https://discord.gg/vdcqGdnhrX" aria-label="Discord">
              <i className="fab fa-discord text-2xl sm:text-3xl text-purple-600"></i>
            </Link>
          </div>
          <p className="mt-2">
            Copyright © 2023 - Ryan Wilson - All rights reserved
          </p>
        </aside>
        <div className="flex justify-between">
          Tech icon SVGs by{' '}
          <Link href="https://icons8.com" aria-label="Icons8 Website">
            Icons8
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
