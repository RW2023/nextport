import React from 'react';
import 'daisyui/dist/full.css'; // Import Daisy UI styles

function About() {
    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold text-center">About Me</h1>
            <div className="grid grid-cols-3 gap-4"> {/* Using CSS grid with 3 columns and some gap */}
                <div className="bg-blue-100 p-4 rounded-lg"> {/* Adding some styling to the grid items */}
                    <p>grid 1</p> {/* Changed <p1> to <p> */}
                </div>
                <div className="bg-blue-100 p-4 rounded-lg">
                    <p>grid 2</p>
                </div>
                <div className="bg-blue-100 p-4 rounded-lg">
                    <p>grid 3</p>
                </div>
            </div>
        </div>
    );
}

export default About;
