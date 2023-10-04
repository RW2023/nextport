import React from 'react';
// import Image from 'next/image';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
// import Link from 'next/link';
import Card from '@/components/Card/Card';

function Projects() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 pt-20">
        <Card />
        {/* Manually add your project cards here */}
      </div>
      <Footer />
    </>
  );
}

export default Projects;
