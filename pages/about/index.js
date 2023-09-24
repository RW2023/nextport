import React from 'react';
import 'daisyui/dist/full.css'; 
import Navbar from '@/components/Navbar/Navbar';

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
                                src="https://via.placeholder.com/300"
                                alt="Your Image"
                                className="rounded-full w-60 mx-auto"
                            />
                        </div>
                        <div className="text-left space-y-4">
                            <p className="text-xl">
                                Hello! I'm [Your Name], a passionate [Your Profession] based in [Your Location].
                            </p>
                            <p className="text-xl">
                                With over [X years] of experience in [Field], I specialize in [Specialties].
                            </p>
                            <p className="text-xl">
                                When I'm not [What you do professionally], you can find me [Hobbies/Interests].
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


