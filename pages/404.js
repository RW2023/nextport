// pages/404.js

import React from 'react';
import Link from 'next/link';

function Custom404() {
  return (
    <div
      className="min-h-screen flex items-center justify-center text-center bg-gray-100 dark:bg-gray-900"
      data-theme="dark"
    >
      <div className="card bordered p-10 shadow-2xl" data-theme="dracula">
        <h1 className="text-4xl font-bold mb-4">
          Oh No! That page is not here🥹
        </h1>
        <p className="mb-4">
          The page you are looking for does not exist or an other error
          occurred.
        </p>
        <Link href="/" className='underline-offset-1 bg-black text-headline'>
          Go back home
        </Link>
      </div>
    </div>
  );
}

export default Custom404;
