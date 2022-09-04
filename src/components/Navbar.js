import React from 'react';
import logo from '../assets/react-icon-small.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} className="navbar_img"/>
      <h3 className="navbar-logo-text">ReactFacts</h3>
      <h4 className="navbar-title">React Course - Project 1</h4>
    </nav>
  )
}

export default Navbar