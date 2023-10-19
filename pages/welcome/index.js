
import React from 'react';
import Image from 'next/image';
import 'daisyui/dist/full.css';
import Link from 'next/link';

function Welcome() {
  return (
    <>
      <div
        className="flex flex-wrap justify-center items-center min-h-screen dark:bg-gray-900 border-stroke"
        data-theme="black"
     
      >
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-extrabold text-center mb-4">
            Welcome to My Web App
          </h1>
          <p className="mt-4 text-lg text-center mb-12">
            Here, you'll find a showcase of some of my work and more. Check out
            the categories below:
          </p>
          <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            <div className="card bordered hover:bg-stroke hover:shadow-xl transition ease-in-out duration-200 transform hover:scale-105">
              <Link href={'/projects/'}>
                <figure>
                  <Image
                    src="/img/placeholder.jpg"
                    alt="Placeholder"
                    width={500}
                    height={300}
                  />
                </figure>
              </Link>
              <div className="card-body bg-black">
                <h2 className="card-title text-headline">Projects</h2>
                <p className="text-paragraph">
                  Browse my latest projects and creations.
                </p>
              </div>
            </div>
            <div className="card bordered hover:bg-primary hover:shadow-xl transition ease-in-out duration-200 transform hover:scale-105">
              <Link href={'/about/'}>
                <figure>
                  <Image
                    src="/img/me.jpg"
                    alt="A picture of Ryan Wilson"
                    className="rounded-full w-60 mx-auto"
                    width={240}
                    height={300}
                  />
                </figure>
              </Link>
              <div className="card-body bg-black">
                <h2 className="card-title text-headline">About Me</h2>
                <p className="text-paragraph">
                  Learn more about me and how I got here.
                </p>
              </div>
            </div>
            <div className="card bordered hover:bg-primary hover:shadow-xl transition ease-in-out duration-200 transform hover:scale-105">
              <Link href={'/contact/'}>
                <figure>
                  <Image
                    src="/img/connect.jpg"
                    alt="Placeholder"
                    width={500}
                    height={300}
                  />
                </figure>
              </Link>
              <div className="card-body bg-black">
                <h2 className="card-title">Contact</h2>
                <p className="text-paragraph">Get in touch with me.</p>
              </div>
            </div>
            <div className="card bordered hover:bg-primary hover:shadow-xl transition ease-in-out duration-200 transform hover:scale-105">
              <figure>{/* Optionally insert an image here */}</figure>
              <div className="card-body bg-black">
                <h2 className="card-title">Other Interests</h2>
                <p className="text-paragraph">
                  Explore my other interests and hobbies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Welcome;
