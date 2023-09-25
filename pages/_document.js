import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" data-theme="dark"  >
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Ryan Wilson's Portfolio" />
        <meta name="author" content="Ryan Wilson" />
        <meta name="keywords" content="Ryan Wilson, Portfolio, Web Developer, 
        Software Developer, Front End Developer, Back End Developer, 
        Full Stack Developer, MERN Stack, React, Next.js, Junior Developer, 
        London, Ontario, Canada, Web Development, Coding, Programming,
         Software Engineering, Responsive Design, UI/UX, JavaScript, HTML, CSS, 
         Node.js, Express, MongoDB, Git, GitHub, Version Control" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Ryan Wilson</title>

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
