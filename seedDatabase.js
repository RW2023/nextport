require('dotenv').config();
const { MongoClient } = require('mongodb');

async function seedDatabase() {
  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db('portfolio');
    const collection = db.collection('projects');

    const projects = [
      {
        title: 'Tip Calculator',
        description:
          'This is a Front End Mentor Coding Challenge. I collaborated with a friend on this project. he did the majority of the CSS and I worked on the JavaScript. I scaffolded the HTML. This is one of my first projects and one of my first times working as part of a team.',
        stack: ['HTML', 'CSS', 'JavaScript'],
        image: '/img/projects/tip.png',
        github: 'https://github.com/RW2023/tip-calculator-app-pfsc',
        liveVersion: 'https://femtipcalculator2023.netlify.app/',
      },
      {
        title: 'ComingSoon',
        description:
          'This is a Landing Page from a Coding Boot-camp. This was also an early project. I was introduced to the concept of mobile first design. I had a lot of practice with flexbox, a concept that gave me a lot of trouble at the time. I also learned more about how to use media queries.',
        stack: ['HTML', 'CSS'],
        image: '/img/projects/Coming-Soon.png',
        github: 'https://github.com/RW2023/ComingSoon',
        liveVersion: 'https://comingsoonfm.netlify.app/',
      },
      {
        title: 'Pokedex',
        description:
          'This was my inaugural project in React, where I got my hands dirty with state, props, and the unidirectional data flow. Its a simple game and I could add a button so that you don\'t have to manually refresh it to get a new score. I like it like this where the tutorial left it and so did I. I am tempted to "fix it" but I think it is good to have a record of where I was when I started.',
        stack: ['HTML', 'CSS', 'JavaScript', 'React'],
        image: '/img/projects/PokeDex.png',
        github: 'https://github.com/RW2023/pokedex',
        liveVersion: 'https://rwpokegame.netlify.app/',
      },
      {
        title: 'QrCode',
        description:
          'Another Front End Mentor Challenge. In this project I got to work with Figma for the first time. It was quite a useful tool to visualize what you are attempting before you start coding. I was able to add little touches like drop shadow and adjusting the border stroke to make it pop a little bit more than called for.',
        stack: ['HTML', 'CSS'],
        image: '/img/projects/qrCode.png',
        github: 'https://github.com/RW2023/qrCode',
        liveVersion: 'https://rw2023qrcode.netlify.app/',
      },
      {
        title: 'Portfolio',
        description:
          'This is my portfolio. I built it with NextJs 13. It is the site you are currently on. I used Tailwind CSS for the styling. I also augmented the styling by using the Daisy UI library. The live version link would be a circular thing. instead you can check out my custom error page. I will keep working on it 😊',
        stack: [
          'HTML',
          'CSS',
          'Tailwind',
          'JavaScript',
          'Node',
          'React',
          'Next',
        ],
        image: '/img/projects/portfolio.png',
        github: 'https://github.com/RW2023/nextport',
        liveVersion: 'nextport-alpha.vercel.app',
      },
    ];

    await collection.insertMany(projects);
    console.log('Data seeded successfully');
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}

seedDatabase().catch(console.error);
