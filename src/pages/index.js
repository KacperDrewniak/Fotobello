import React, { Component } from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

import Navbar from "../components/navbar";
import Logo from "../components/logo";
import NameCategory from "../components/nameCategory";
import MenuIcon from "../components/menuIcon";
import Images from "../components/images";
import ScreenDarker from "../components/screenDarker";
// Style

// myComponents

class IndexPage extends Component {
  state = {};
  render() {
    return (
      <>
        <ScreenDarker />
        <Navbar />
        <Logo />
        <NameCategory />
        <MenuIcon />
        <Images />
      </>
    );
  }
}

export default IndexPage;
