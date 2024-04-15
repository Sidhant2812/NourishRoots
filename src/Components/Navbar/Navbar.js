import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="one_Navbar_navbar">
      <div className="one_Navbar_left-side">
        <span className="one_Navbar_website-name">NourishRoots</span>
      </div>
      <div className="one_Navbar_right-side">
        <ul className="one_Navbar_nav-links">
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">About Us</a></li>
          <Link  className="one_Navbar_link" to="/login">Login</Link>
          <Link className="one_Navbar_link" to="/signup">Signup</Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
