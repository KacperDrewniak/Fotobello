import React from "react";
import "../styles/nameCategoryStyle.css";

const NameCategory = props => (
  <>
    <h1 className="nameCategory">{props.name}</h1>
    <h1 className="nameCategoryCopy">{props.name}</h1>
  </>
);
export default NameCategory;
