import React from "react";
import "../styles/categoryList.css";
import { StaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";

const CategoryList = () => (
  <StaticQuery
    query={graphql`
      query {
        swapi {
          categories {
            title
            titleName
            images {
              fileName
              handle
              width
              height
            }
          }
        }
      }
    `}
    render={({ swapi: { categories } }) => (
      <ul className="categories">
        {categories.map(category => (
          <li>
            <Link to={`/${category.titleName}`}>{category.title}</Link>
          </li>
        ))}
      </ul>
    )}
  />
);

export default CategoryList;
