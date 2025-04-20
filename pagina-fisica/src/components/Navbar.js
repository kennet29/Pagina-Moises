import React from "react";
import { Link } from "react-router-dom";
import  '../css/navbar.css';

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/">Cinemática</Link>
      <Link to="/dinamica">Dinámica</Link>
      <Link to="/leyes-newton">Leyes de Newton</Link>
      <Link to="/energia">Energía</Link>
    </nav>
  );
};

export default Navbar;
