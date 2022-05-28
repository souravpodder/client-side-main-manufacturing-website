// import { signOut } from 'firebase/auth';
// import React from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { Link, Navigate, useNavigate } from 'react-router-dom';
// import auth from '../../../firebase.init';

import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../firebase.init";
import './Navbar.css';


const Navbar = () => {
  //   const [user, loading, error] = useAuthState(auth);
  //   const navigate = useNavigate();
  //   const logout = () => {
  //     signOut(auth);
  //     localStorage.removeItem('accessToken');
  //     navigate('/');
  //   };
  const [user, loading] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  }

  const navItems = <>
    <li><NavLink to="/home">Home</NavLink></li>
    <li><NavLink to="/contact">Contact</NavLink></li>
    <li><NavLink to="/blogs">Blogs</NavLink></li>

    {
      user && <li><NavLink to="/dashboard/myprofile">Dashboard</NavLink></li>
    }
    {
      user ? <button onClick={logout}>signout</button> : <li><NavLink to="/login">Login</NavLink></li>
    }



    {/* <li>{
      user ? <button onClick={logout} className="btn btn-ghost">Sign Out</button> : <Link to="/login">Login</Link>
    }</li> */}
  </>
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex="0" className="menu menu-compact space-items dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {navItems}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Manufacturer</a>
      </div>
      <div className="navbar-center hidden lg:flex mx-5">
        <ul className="menu menu-horizontal p-0 space-items">
          {navItems}
        </ul>
      </div>

      <div className="navbar-end">
        <label tabIndex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>

      </div>
    </div>
  );
};

export default Navbar;