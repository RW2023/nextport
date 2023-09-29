import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import React from 'react';

function Welcome() {
  
  return (
    <>
    <Navbar />
    <div className="bg-background min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-white text-center">
          Welcome to My Portfolio
        </h1>
        <p className="mt-4 text-lg text-gray-300 text-center">
          Here, you'll find a showcase of my work and more. Explore the
          categories below:
        </p>

        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {/* Project */}
          <div className="flex flex-col items-center p-6 border border-gray-300 rounded-lg shadow-md hover:shadow-lg hover:bg-flame transition duration-300">
            <h2 className="text-xl font-semibold text-flame">Projects</h2>
            <p className="mt-2 text-gray-400">
              Browse my latest projects and creations.
            </p>
          </div>

          {/* About */}
          <div className="flex flex-col items-center p-6 border border-gray-300 rounded-lg shadow-md hover:shadow-lg hover:bg-princeton-orange transition duration-300">
            <h2 className="text-xl font-semibold text-princeton-orange">
              About Me
            </h2>
            <p className="mt-2 text-gray-400">
              Learn more about me and my skills.
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center p-6 border border-gray-300 rounded-lg shadow-md hover:shadow-lg hover:bg-azul transition duration-300">
            <h2 className="text-xl font-semibold text-azul">Contact</h2>
            <p className="mt-2 text-gray-400">Get in touch with me.</p>
          </div>

          {/* Something Else */}
          <div className="flex flex-col items-center p-6 border border-gray-300 rounded-lg shadow-md hover:shadow-lg hover:bg-black-olive transition duration-300">
            <h2 className="text-xl font-semibold text-black-olive">
              Something Else
            </h2>
            <p className="mt-2 text-gray-400">
              Explore additional content here.
            </p>
          </div>
        </div>
      </div>
    </div><Footer />
    </>
  );
}

export default Welcome;
