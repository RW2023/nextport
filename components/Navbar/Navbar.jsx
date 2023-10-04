'use client';
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import HamburgerMenu from '../Hamburger/Hamburger';


function Navbar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <div className="w-full bg-black fixed top-0 left-0 right-0 z-10 mb-1">
      <div className="justify-between px-4 mx-auto md:items-center md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          {/* LOGO */}
          <Link href="/">
            <div className="cursor-pointer text-2xl">RW</div>
          </Link>
          {/* HAMBURGER BUTTON FOR MOBILE */}
          <div className="md:hidden">
            <button
              className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? <HamburgerMenu /> : <HamburgerMenu />}
            </button>
          </div>
        </div>
        <div
          className={`flex-none md:flex ${
            navbar ? 'block' : 'hidden md:block'
          }`}
        >
          <ul className="menu menu-horizontal px-1 text-2xl">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
