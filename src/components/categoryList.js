import React from "react";
import "../styles/categoryList.css";
import { StaticQuery, graphql } from "gatsby";

const CategoryList = () => (
  <StaticQuery
    query={graphql`
      query {
        swapi {
          categories {
            title
          }
        }
      }
    `}
    render={({ swapi: { categories } }) => (
      <ul className="categories">
        {categories.map(category => (
          <li>{category.title}</li>
        ))}
      </ul>
    )}
  />
);

export default CategoryList;
