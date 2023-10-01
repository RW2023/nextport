import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import Link from 'next/link';

function Projects() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        {/* Example Project Card */}
        <div className="card bordered max-w-md mx-auto my-4">
          <figure>
            <Image
              src="/img/placeholder.jpg"
              width={500}
              height={500}
              alt="Example Project"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl">Example Project</h2>
            <p>This is an example project description.</p>
            <div className="card-actions">
              <Link href="https://github.com/example/example-project">
                <button className="btn btn-primary bg-button border-stroke text-stroke hover:border-stroke hover:text-headline">View on GitHub</button>
              </Link>
              <Link href="https://example.com/live-version">
                <button className="btn btn-secondary bg-stroke text-headline border-headline hover:bg-primary hover:border-stroke">Live Version</button>
              </Link>
            </div>
          </div>
        </div>
        {/* Manually add your project cards here */}
      </div>
      <Footer />
    </>
  );
}

export default Projects;
