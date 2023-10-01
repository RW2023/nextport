import React from 'react';
import Link from 'next/link'; // Import the Link component from Next.js

function Navbar() {
  return (
    <div
      className="flex flex-col sm:flex-row navbar bg-black sticky top-0 z-50"
      data-theme="luxury"
    >
      <div className="flex-1">
        <Link href="/">
          <i className="fa-solid fa-bars-staggered mr-1 text-lg"></i>RW
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">
              <i className="fas fa-home"></i> Home
            </Link>
          </li>
          <li>
            <Link href="/about">
              <i className="fas fa-user"></i> About
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <i className="fas fa-briefcase"></i> Projects
            </Link>
          </li>

          <li>
            <Link href="/contact">
              <i className="fas fa-envelope"></i> Contacts
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
