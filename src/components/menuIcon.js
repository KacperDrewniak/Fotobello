import React from "react";
import { Link } from "gatsby";

import "../styles/menuIcon.css";
const MenuIcon = () => (
  <Link to="/menu">
    <div className="menuIcon">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </Link>
);
export default MenuIcon;
