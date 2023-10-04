import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CssLogo from '../CssLogo/CssLogo';
import HtmlLogo from '../HtmlLogo/HtmlLogo';
import JsLogo from '../JsLogo/JsLogo';
import ReactLogo from '../ReactLogo/ReactLogo';
import Figma from '../Figma/Figma';
import NextLogo from '../NextLogo/NextLogo';
import NodeLogo from '../NodeLogo/NodeLogo';

function Card() {
  let projects = [
    {
      title: 'Tip Calculator',
      description:
        'This is a Front End Mentor Coding Challenge. I collaborated with a friend on this project. he did the majority of th css and i worked on the javascript. I scaffolded the html. This is  one of my first projects and one of my first times working as part of a team ',
      stack: [
        <HtmlLogo key="html" />,
        <CssLogo key="css" />,
        <JsLogo key="js" />,
      ],
      image: '/img/projects/tip.png',
      github: 'https://github.com/RW2023/tip-calculator-app-pfsc',
      liveVersion: 'https://femtipcalculator2023.netlify.app/',
    },
    {
      title: 'ComingSoon',
      description:
        'This is a Landing Page from a Coding Boot-camp. This was also an early project. I was introduced to the concept of mobile first design. I had a lot of practice with flexbox, a concept that gave me a lot of trouble at the time. I also learned more about how to use media queries.',
      stack: [<HtmlLogo key="html" />, <CssLogo key="css" />],
      image: '/img/projects/Coming-Soon.png',
      github: 'https://github.com/RW2023/ComingSoon',
      liveVersion: 'https://comingsoonfm.netlify.app/',
    },
    {
      title: 'Pokedex',
      description: (
        <>
          This was my inaugural project in
          <span>
            <ReactLogo />
          </span>
          React, where I got my hands dirty with state, props, and the
          unidirectional data flow. Its a simple game and I could add a button
          so that you don't have to manually refresh it to get a new score. I
          like it like this where the tutorial left it and so did I. I am
          tempted to "fix it" but I think it is good to have a record of where I
          was when I started.
        </>
      ),
      stack: [
        <HtmlLogo key="html" />,
        <CssLogo key="css" />,
        <JsLogo key="js" />,
        <ReactLogo key="react" />,
      ],
      image: '/img/projects/PokeDex.png',
      github: 'https://github.com/RW2023/pokedex',
      liveVersion: 'https://rwpokegame.netlify.app/',
    },

    {
      title: 'QrCode',
      description: (
        <>
          Another Front End Mentor Challenge. In this project I got to work with
          <span>
            <Figma />
          </span>
          figma for the first time. It was quite a useful tool to visualize what
          you are attempting before you start coding. I was able to add little
          touches like drop shadow and adjusting the border stroke to make it
          pop a little bit more than called for.
        </>
      ),
      stack: [<HtmlLogo key="html" />, <CssLogo key="css" />],
      image: '/img/projects/qrCode.png',
      github: 'https://github.com/RW2023/qrCode',
      liveVersion: 'https://rw2023qrcode.netlify.app/',
    },
    {
      title: 'Portfolio',
      description: (
        <>
          This is my portfolio. I built it with NextJs 13
          <span>
            <NextLogo />
          </span>
          It is the site you are currently on. 
          I used Tailwind CSS for the styling. I also augmented the styling by using the Daisy UI library
        </>
      ),
      stack: [<HtmlLogo key="html" />, <CssLogo key="css" />, <JsLogo key="js" />, <NodeLogo key='node' />, <ReactLogo key="react" />, <NextLogo key="next" /> ],
      image: '/img/projects/portfolio.png',
      github: 'https://github.com/RW2023/nextport',
      liveVersion: 'nextport-alpha.vercel.app',
    },

    // ... (Add other projects here)
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className='text-4xl text-center'>Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-3 gap-4 justify-center">
        {projects.map((project, index) => (
          <div
            className="card bordered max-w-md w-full mx-auto my-4"
            data-theme="luxury"
            key={index}
          >
            <figure>
              <Image
                src={project.image}
                width={500}
                height={500}
                alt={project.title}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl">{project.title}</h2>
              <p>{project.description}</p>
              <div className="flex flex-wrap space-x-2">
                <h3 className="text-xl">Tech Stack:</h3>
                {project.stack &&
                  project.stack.map((TechLogo, i) => (
                    <div key={i} className="tech-logo">
                      {TechLogo}
                    </div>
                  ))}
              </div>
              <div className="card-actions">
                <Link href={project.github} aria-label="View project on GitHub">
                  <button className="btn btn-primary bg-button border-stroke text-stroke ">
                    View on GitHub
                  </button>
                </Link>
                {project.liveVersion && (
                  <Link
                    href={project.liveVersion}
                    aria-label="View live version of project"
                  >
                    <button className="btn btn-secondary bg-stroke border-headline hover:bg-primary hover:border-stroke hover:text-stroke">
                      Live Version
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
