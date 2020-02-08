import React from "react";
import { Link } from "gatsby";

import GraphImg from "graphcms-image";
import Navbar from "../components/navbar";
import MenuIcon from "../components/menuIcon";
import Logo from "../components/logo";
import CategoryList from "../components/categoryList";
import ScreenDarker from "../components/screenDarker";
import NameCategory from "../components/nameCategory";

const categoryTemplate = data => (
  <>
    <ScreenDarker />
    <Navbar />
    <MenuIcon forward="/" />
    <Logo />
    <NameCategory name={data.pageContext.data.title} />
    {console.log(data)}
    <div>
      {data.pageContext.data.images.map(image => (
        <GraphImg image={image} />
      ))}
    </div>
  </>
);

export default categoryTemplate;
