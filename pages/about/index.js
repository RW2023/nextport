import React from 'react';
import 'daisyui/dist/full.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import Image from 'next/image';

function About() {
  return (
    <>
      <Navbar />
      <div
        className="bg-gray-900 min-h-screen py-12 px-4 sm:px-6 lg:px-8 text-white "
        data-theme="black"
      >
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-8">About Me</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="card bordered hover:bg-primary hover:shadow-xl transition ease-in-out duration-200 transform hover:scale-105">
              <figure>
                <Image
                  src="/img/me.jpg"
                  alt="A picture of Ryan Wilson"
                  className="rounded-full w-60 mx-auto border-4 border-primary"
                  width={240} // Set the width
                  height={240} // Set the height
                />
              </figure>
            </div>
            <div className="card bordered p-6 hover:bg-primary hover:shadow-xl transition ease-in-out duration-200 transform hover:scale-105 text-left space-y-4">
              <p className="text-xl">
                Hello! my name is Ryan, a passionate Junior Full Stack Developer
                based in London, Ontario Canada.
              </p>
              <p className="text-xl">
                With a variety of skills in Web Development, I specialize in The
                MERN stack (Mongo, Express, React and Node).
              </p>
              <p className="text-xl">
                When I am not Coding, you can find me spending time with my
                young family.
              </p>
              {/* <button className="btn btn-primary">
                                Download Resume
                            </button> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default About;
