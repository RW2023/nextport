import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import CssLogo from '../CssLogo/CssLogo';
import HtmlLogo from '../HtmlLogo/HtmlLogo';
import JsLogo from '../JsLogo/JsLogo';
import ReactLogo from '../ReactLogo/ReactLogo';
import Figma from '../Figma/Figma';
import NextLogo from '../NextLogo/NextLogo';
import NodeLogo from '../NodeLogo/NodeLogo';
import Tailwind from '../Tailwind/Tailwind';
import Mongo from '../Mongo/Mongo';
import TypescriptLogo from '../TypescriptLogo/TypscriptLogo';
import Loading from '../Loading/Loading';

const getTechLogo = (tech) => {
  switch (tech) {
    case 'HTML':
      return <HtmlLogo key="html" />;
    case 'CSS':
      return <CssLogo key="css" />;
    case 'JS':
      return <JsLogo key="js" />;
    case 'React':
      return <ReactLogo key="react" />;
    case 'Figma':
      return <Figma key="figma" />;
    case 'Next':
      return <NextLogo key="next" />;
    case 'Node':
      return <NodeLogo key="node" />;
    case 'Tailwind':
      return <Tailwind key="tailwind" />;
    case 'Mongo':
      return <Mongo key="mongo" />;
    case 'TypeScript':
      return <TypescriptLogo key="TypeScript" />;
    default:
      return null;
  }
};

function Card() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await axios.get('/api/projects');
      setProjects(response.data);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl text-center">
        <span className="fa fa-briefcase mr-3"></span>Projects
      </h1>
      {loading ? (
        <Loading text="Projects" />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                    project.stack.map((tech, i) => (
                      <div key={i} className="tech-logo">
                        {getTechLogo(tech)}
                      </div>
                    ))}
                </div>
                <div className="card-actions">
                  <Link
                    href={project.github}
                    aria-label="View project on GitHub"
                  >
                    <button className="btn btn-primary bg-button border-stroke text-stroke">
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
      )}
    </div>
  );
}

export default Card;
