import React from "react";

import { Link } from "gatsby";
import Navbar from "../components/navbar";
import MenuIcon from "../components/menuIcon";
import Logo from "../components/logo";
import CategoryList from "../components/categoryList";
import ScreenDarker from "../components/screenDarker";
// Style

// myComponents

const Menu = () => (
  <>
    <ScreenDarker />
    <Navbar />
    <MenuIcon forward="/" />
    <Logo />
    <CategoryList />
  </>
);
export default Menu;
