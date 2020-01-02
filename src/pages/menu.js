import React from "react";

import { Link } from "gatsby";
import Navbar from "../components/navbar";
import MenuIcon from "../components/menuIcon";
import Logo from "../components/logo";
import CategoryList from "../components/categoryList";
// Style

// myComponents

const Menu = () => (
  <>
    <Navbar />
    <MenuIcon />
    <Logo />
    <CategoryList />
  </>
);
export default Menu;
