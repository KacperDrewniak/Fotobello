import React from "react";

import { Link } from "gatsby";

// Style

// myComponents
import Navbar from "../components/navbar";
import Logo from "../components/logo";
import NameCategory from "../components/nameCategory";
import MenuIcon from "../components/menuIcon";
import Images from "../components/images";
import ScreenDarker from "../components/screenDarker";
import Form from "../components/form.js";

const Contact = () => (
  <>
    <Logo />
    <ScreenDarker />
    <Navbar />
    <MenuIcon />
    <Form />
  </>
);

export default Contact;
