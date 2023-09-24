import React from 'react';
import 'daisyui/dist/full.css'; // Import Daisy UI styles

function About() {
    return (
        <div className='bg-slate-500 text-center'>
            <div className="p-6 mx-auto bg-black-blend-darken">
                <h1 className="text-3xl font-bold text-center bg-stroke text-headline">About Me</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-background p-4 rounded-lg mt-2">
                        <p className="text-paragraph">grid 1</p>
                    </div>
                    <div className="bg-background p-4 rounded-lg mt-2">
                        <h2>Title 2</h2>
                        <p className="text-paragraph">grid 2</p>
                    </div>
                    <div className="bg-background p-4 rounded-lg mt-2">
                        <p className="text-paragraph">grid 3</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
