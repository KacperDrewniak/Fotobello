import React from "react";

import { Link } from "gatsby";

// Style

// myComponents
import Navbar from "../components/navbar";
import MenuIcon from "../components/menuIcon";
import Logo from "../components/logo";
import AboutMe from "../components/aboutMe";
import ScreenDarker from "../components/screenDarker";

const About = () => (
  <>
    <Logo />
    <ScreenDarker />
    <Navbar />
    <AboutMe />
  </>
);

export default About;
