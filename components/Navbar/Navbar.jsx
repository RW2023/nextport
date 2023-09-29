import React from 'react';
import Link from 'next/link'; // Import the Link component from Next.js

function Navbar() {
  return (
    <div className="navbar bg-black sticky top-0 z-50" data-theme="luxury">
      <div className="flex-1">
        <Link href="/">Ryan Wilson</Link>
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
          {/* Uncomment this when you want to add a Contacts link */}
          {/* <li>
            <Link href="/contacts"><i className="fas fa-envelope"></i> Contacts</Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
