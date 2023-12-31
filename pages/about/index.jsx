import React from 'react';
import 'daisyui/dist/full.css';
import GitHub from '@/components/github/github';

function About() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 mt-20">
      <div className="flex flex-col justify-center text-center">
        <GitHub />
      </div>
      <div>
        <h1 className="text-headline text-bold text-center text-3xl md:text-4xl">
          <span className="fa-solid fa-circle-info mr-3 mt-10 text-center text-4xl"></span>
          About Me
        </h1>
        <div className="flex flex-col items-center justify-center text-center p-4">
          <div className="bg-main text-stroke card bordered p-5 shadow-lg max-w-2xl mx-auto">
            <p className="text-i mb-4">
              Hello! My name is Ryan, a passionate Junior Full Stack Developer
              based in London, Ontario, Canada.
            </p>
            <h2 className="text-xl font-bold mb-2">My Story</h2>
            <h3 className="text-l font-bold mb-2">How I got here</h3>
            <div className="space-y-4">
              <p className="text-l">
                I have always had a passion for technology and computers. From a
                young age, I was fascinated with machines and how they worked. I
                was in the 9th grade when my father got a computer. I was amazed
                at how it worked and how it could do so many things. I was
                especially fascinated by the internet. I imagined a time when
                all machines would talk to one another and share information. I
                was hooked. I knew I wanted to be a part of this new world.
              </p>
              <p className="text-l">
                My first brush with programming was in the 10th grade. I took a
                computer programming class. I landed probably the worst intro to
                programming teacher you could imagine. We were learning COBOL,
                which seemed like a dead language even then. I was so bored I
                dropped the class. I didn't think I would ever be a programmer.
                I felt like coding was just not for me.
              </p>
              <p className="text-l">
                My next brush with programming was just out of high school. I
                was working a tech support job supporting Dell PC Hardware at
                the time. A friend gifted me a book. It was a book on
                programming in C++. I struggled through the first chapter. It
                was then I was sure programming was not for me. I read the first
                chapter and it seemed like every single concept was over my
                head. I was so discouraged I gave up. I didn't think I would
                ever be a programmer. I felt like coding was just not for me.
              </p>
              <p className="text-l">
                My latest brush with coding, in my mid 40's is the most
                fulfilling. The pandemic was raging and my brain was not happy.
                I still could not shake this desire to learn how to code
              </p>
            </div>
            <div className="mt-4 text-l">
              I decided i would give it the final do, not try. It never ends.
              which is one of the things i like the most about it. there is
              always another door to open. A deeper level of understanding that
              can be reached. Here I am. Courses and videos later. I am a junior
              full stack developer. I am still learning which may be painfully
              obvious. I am here though 👋🏾.
            </div>
            <p className="text-l mt-4">
              I chose the MERN stack because I wanted to learn the most popular
              stack. I also wanted to learn a stack that would allow me to build
              a full application. I am glad I chose it. Next JS is a very nice
              Dev tool 😁
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
