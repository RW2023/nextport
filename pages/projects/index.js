// pages/projects/index.js
import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

const Projects = () => {
    return (
        <div> 
            <Navbar />
            <div className="container mx-auto p-4">
                <div className="card bordered max-w-md mx-auto">
                    <figure>
                        <Image
                            src="/img/placeholder.jpg"
                            alt="Placeholder"
                            width={500}
                            height={300}
                        />
                    </figure>
                    <div className="card-body">
                        <h1 className="card-title text-2xl">Projects Coming Soon!</h1>
                        <p>We're working hard to list all the cool projects here. Stay tuned!</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Stay Updated</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div> 
    );
};

export default Projects;
