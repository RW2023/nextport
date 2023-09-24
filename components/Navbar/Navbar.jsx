import React, { useEffect } from 'react';
import anime from 'animejs';

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
            <li><a><i className="fas fa-home"></i> Homepage</a></li>
            <li><a><i className="fas fa-briefcase"></i> Portfolio</a></li>
            <li><a><i className="fas fa-info-circle"></i> About</a></li>
            <li><a><i className="fas fa-laptop-code"></i> Technologies</a></li>
            <li><a><i className="fas fa-blog"></i> Blog</a></li>
            <li><a><i className="fas fa-envelope"></i> Contact</a></li>
            <li><a><i className="fas fa-code-branch"></i> GitHub Repo</a></li>
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
