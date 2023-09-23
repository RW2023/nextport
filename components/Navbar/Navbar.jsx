import React from 'react';

const Navbar = () => {
  return (
    <div data-theme="dark">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <i className="fas fa-bars"></i>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a><i className="fas fa-home"></i> Homepage</a></li>
              <li><a><i className="fas fa-briefcase"></i> Portfolio</a></li>
              <li><a><i className="fas fa-info-circle"></i> About</a></li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost normal-case text-xl"><i className="fas fa-user"></i> Ryan Wilson</a>
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
    </div>
  );
};

export default Navbar;
