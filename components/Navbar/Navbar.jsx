import React, { useEffect } from 'react';
import anime from 'animejs';
import Link from 'next/link';

const Navbar = () => {
  useEffect(() => {
    anime.timeline({
      targets: '.fly-in-bottom',
    })
    .add({
      translateY: [1000, 0],
      duration: 1800,
      easing: 'easeOutExpo'
    })
    .add({
      translateY: [0, -50],
      duration: 100,
      easing: 'easeInQuad'
    })
    .add({
      translateY: [-50, 0],
      duration: 100,
      easing: 'easeOutQuad'
    });

    anime({
      targets: '.pulse',
      scale: [1, 1.1],
      direction: 'alternate',
      loop: 3,
      duration: 500,
      easing: 'easeInOutSine'
    });
  }, []);

  return (
    <div className="navbar bg-base-100 sticky top-0" data-theme="dark">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <i className="fas fa-bars"></i>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

    <Link href="/" className="link">
  <span className="fas fa-home"></span> Homepage
</Link>
<Link href="/portfolio" className="link">
  <span className="fas fa-briefcase"></span> Portfolio
</Link>
<Link href="/about" className="link">
  <span className="fas fa-info-circle"></span> About
</Link>
<Link href="/technologies" className="link">
  <span className="fas fa-laptop-code"></span> Technologies
</Link>
<Link href="/blog" className="link">
  <span className="fas fa-blog"></span> Blog
</Link>
<Link href="/contact" className="link">
  <span className="fas fa-envelope"></span> Contact
</Link>
<Link href="/github" className="link">
  <span className="fas fa-code-branch"></span> GitHub Repo
</Link>

          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-xl fly-in-bottom pulse">
          <i className="fas fa-user"></i> Ryan Wilson
        </a>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <i className="fas fa-search"></i>
        </button>
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <i className="fas fa-bell"></i>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
