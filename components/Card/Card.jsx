import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CssLogo from '../CssLogo/CssLogo';
import HtmlLogo from '../HtmlLogo/HtmlLogo';
import JsLogo from '../JsLogo/JsLogo';
import ReactLogo from '../ReactLogo/ReactLogo';

function Card() {
  let projects = [
    {
      title: 'Tip Calculator',
      description: 'Front End Mentor Challenge',
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
      description: 'Landing Page from Coding Boot-camp',
      stack: [
      <HtmlLogo key="html" />, 
      <CssLogo key="css" />
    ],
      image: '/img/projects/Coming-Soon.png',
      github: 'https://github.com/RW2023/ComingSoon',
      liveVersion: 'https://comingsoonfm.netlify.app/',
    },
    {
      title: 'Pokedex',
      description: 'Pokedex game React Course',
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
      description: 'Front End Mentor Challenge',
      stack: [
      <HtmlLogo key="html" />, 
      <CssLogo key="css" />
    ],
      image: '/img/projects/qrCode.png',
      github: 'https://github.com/RW2023/qrCode',
      liveVersion: 'https://rw2023qrcode.netlify.app/',
    },
    // ... (Add other projects here)
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div
            className="card bordered max-w-md mx-auto my-4"
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
              <div className="flex space-x-2">
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
