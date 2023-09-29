import React from 'react';
import Link from 'next/link'; // Import the Link component from Next.js

function Navbar() {
  return (
    <div className="navbar bg-black" data-theme="luxury">
      <div className="flex-1">
        <Link href="/">Ryan Wilson</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          {/* <li>
            <Link href="/contacts">Contacts</Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
