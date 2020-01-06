import React from "react";
import { Link } from "gatsby";
import "../styles/NavbarStyle.css";

const Navbar = () => (
  <nav>
    <ul className="links">
      <li>
        <a>
          <Link to="/">Porftfolio</Link>
        </a>
      </li>
      <li>
        <a>
          <Link to="/about">About</Link>
        </a>
      </li>
      <li>
        <a>
          <Link to="/contact">Contact</Link>
        </a>
      </li>
    </ul>
    <ul className="social">
      <li>
        <a href="https://www.facebook.com/fotobello/">Facebook</a>
      </li>
      <li>
        <a href="#">Instagram</a>
      </li>
    </ul>
  </nav>
);

export default Navbar;
