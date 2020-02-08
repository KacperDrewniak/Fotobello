import React from "react";
import "../styles/categoryList.css";
import { StaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";

const exit = () => {
  document.querySelector("div.darker").style.animationName = "upToDown";
  document.querySelector("div.darker").style.animationDelay = "0s";
};

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
            <a
              onClick={() => {
                exit();
                setTimeout(() => {
                  window.location = `${category.titleName}`;
                }, 2400);
              }}
            >
              {/* <Link to={`/${category.titleName}`}>{category.title}</Link> */}
              {category.title}
            </a>
          </li>
        ))}
      </ul>
    )}
  />
);

export default CategoryList;
