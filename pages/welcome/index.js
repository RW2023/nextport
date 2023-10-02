import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import React from 'react';
import Image from 'next/image';
import 'daisyui/dist/full.css';

function Welcome() {
  return (
    <>
      <Navbar />
      <div
        className="bg-gray-900 min-h-screen py-12 px-4 sm:px-6 lg:px-8 text-white"
        data-theme="dark"
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
            <div className="card bordered hover:bg-primary hover:shadow-xl transition ease-in-out duration-200 transform hover:scale-105">
              <figure>
                {' '}
                <Image
                  src="/img/placeholder.jpg"
                  alt="Placeholder"
                  width={500}
                  height={300}
                />
              </figure>
              <div className="card-body bg-black">
                <h2 className="card-title text-headline">Projects</h2>
                <p className="text-paragraph">
                  Browse my latest projects and creations.
                </p>
              </div>
            </div>
            <div className="card bordered hover:bg-primary hover:shadow-xl transition ease-in-out duration-200 transform hover:scale-105">
              <figure>
                <Image
                  src="/img/me.jpg"
                  alt="A picture of Ryan Wilson"
                  className="rounded-full w-60 mx-auto"
                  width={240} // Set the width
                  height={300} // Set the height
                />
              </figure>
              <div className="card-body bg-black">
                <h2 className="card-title text-headline">About Me</h2>
                <p className="text-paragraph">
                  Learn more about me and my skills.
                </p>
              </div>
            </div>
            <div className="card bordered hover:bg-primary hover:shadow-xl transition ease-in-out duration-200 transform hover:scale-105">
              <figure>
                {' '}
                <Image
                  src="/img/connect.jpg"
                  alt="Placeholder"
                  width={500}
                  height={300}
                />
              </figure>
              <div className="card-body bg-black">
                <h2 className="card-title">Contact</h2>
                <p className="text-paragraph">Get in touch with me.</p>
              </div>
            </div>
            <div className="card bordered hover:bg-primary hover:shadow-xl transition ease-in-out duration-200 transform hover:scale-105">
              <figure>{/* Optionally insert an image here */}</figure>
              <div className="card-body bg-black">
                <h2 className="card-title">Something Else</h2>
                <p className="text-paragraph">
                  Explore additional content here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Welcome;
