import React from 'react';
import 'daisyui/dist/full.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
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
                            <Image
                                src="/img/me.jpg"
                                alt="A picture of Ryan Wilson"
                                className="rounded-full w-60 mx-auto"
                                width={240}  // Set the width
                                height={240} // Set the height
                            />
                        </div>
                        <div className="text-left space-y-4">
                            <p className="text-xl">
                                Hello! my name is Ryan, a passionate Junior Full Stack Developer based in London, Ontario Canada.
                            </p>
                            <p className="text-xl">
                                With a variety of skills in Web Development, I specialize in The MERN stack (Mongo, Express, React and Node).
                            </p>
                            <p className="text-xl">
                                When I am not Coding, you can find me spending time with my young family.
                            </p>
                            <button className="btn btn-primary">
                                Download Resume
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default About;
