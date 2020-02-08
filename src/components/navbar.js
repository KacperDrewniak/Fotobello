import React from "react";
import { Link } from "gatsby";
import "../styles/NavbarStyle.css";

const exit = () => {
  document.querySelector("div.darker").style.animationName = "upToDown";
  document.querySelector("div.darker").style.animationDelay = "0s";
};

const Navbar = () => (
  <nav>
    <ul className="links">
      <li>
        <a
          onClick={() => {
            exit();
            setTimeout(() => {
              window.location = "/";
            }, 2400);
          }}
        >
          Portfiolio
          {/* <Link to="/">Porftfolio</Link> */}
        </a>
      </li>
      <li>
        <a
          onClick={() => {
            exit();
            setTimeout(() => {
              window.location = "/about";
            }, 2400);
          }}
        >
          About
          {/* <Link to="/">Porftfolio</Link> */}
        </a>
      </li>
      <li>
        <a
          onClick={() => {
            exit();
            setTimeout(() => {
              window.location = "/contact";
            }, 2400);
          }}
        >
          Contact
          {/* <Link to="/">Porftfolio</Link> */}
        </a>
      </li>
    </ul>
    <ul className="social">
      <li>
        <a
          onClick={() => {
            exit();
            setTimeout(() => {
              window.location = "https://www.facebook.com/fotobello";
            }, 2400);
          }}
        >
          Facebook
          {/* <Link to="/">Porftfolio</Link> */}
        </a>
      </li>
      <li>
        <a
          onClick={() => {
            exit();
            setTimeout(() => {
              window.location = "https://www.facebook.com/fotobello";
            }, 2400);
          }}
        >
          Instagram
        </a>
      </li>
    </ul>
  </nav>
);

export default Navbar;
