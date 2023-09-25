import React from 'react';
import 'daisyui/dist/full.css'; 
import Navbar from '@/components/Navbar/Navbar';
import Image from 'next/image';

function About() {
    return (
        <>
            <Navbar />
            <div className=" min-h-screen py-12">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-8">About Me</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <img
                                src="https://i.ibb.co/zP4GzRD/me.jpg"
                                alt="Your Image"
                                className="rounded-full w-60 mx-auto"
                            />
                        </div>
                        <div className="text-left space-y-4">
                            <p className="text-xl">
                                Hello! I'mRyan, a passionate Junior Full Stack Developer based in London, Ontario Canada.
                            </p>
                            <p className="text-xl">
                                With a variety of skills   in Web Development, I specialize in The MERN stack (Mongo, Express, React and Node).
                            </p>
                            <p className="text-xl">
                                When I'm not Coding, you can find me spending time with my young family. .
                            </p>
                            <button className="btn btn-primary">
                                Download Resume
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default About;


