import React, { Component } from "react";
import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby";

import TransitionLink from "gatsby-plugin-transition-link";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

import Navbar from "../components/navbar";
import Logo from "../components/logo";

import MenuIcon from "../components/menuIcon";
import Images from "../components/images";
import ScreenDarker from "../components/screenDarker";
import MainContent from "../components/mainContent";
// Style

// myComponents

class IndexPage extends Component {
  state = {};

  componentDidMount() {
    // Set delay in milliseconds
    window.pageExitTime = 1000;
  }
  render() {
    return (
      <>
        <ScreenDarker />
        <Navbar />
        <Logo />
        <MenuIcon forward="/menu" />
        <MainContent />
      </>
    );
  }
}

export default IndexPage;
