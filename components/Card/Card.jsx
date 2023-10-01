import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Card() {
  let projects = [
    {
      title: 'Tip Calculator',
      description: 'Front End Mentor Challenge',
      image: '/img/projects/tip.png',
      github: 'https://github.com/RW2023/tip-calculator-app-pfsc', // Add the GitHub link
      liveVersion: 'https://femtipcalculator2023.netlify.app/', // Add the live version link if available
    },
    {
      title: 'project 2',
      description: 'Front End Mentor Challenge',
      image: '/img/placeholder.jpg',
      github: 'https://github.com/example/project2', // Add the GitHub link
      liveVersion: '', // Add the live version link if available
    },
    // ... (Add other projects here)
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4">
        {projects.map((project, index) => (
          <div className="card bordered max-w-md mx-auto my-4" key={index}>
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
              <div className="card-actions">
                <Link href={project.github}>
                  <button className="btn btn-primary bg-button border-stroke text-stroke hover:border-stroke hover:text-headline">
                    View on GitHub
                  </button>
                </Link>
                {/* Add Live Version link if available */}
                {project.liveVersion && (
                  <Link href={project.liveVersion}>
                    <button className="btn btn-secondary bg-stroke text-headline border-headline hover:bg-primary hover:border-stroke">
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
