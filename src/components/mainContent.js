import React from "react";
import NameCategory from "./nameCategory";
import { StaticQuery, graphql } from "gatsby";


import GraphImg from "graphcms-image";

import "../styles/mainContent.css";
const MainContent = () => (
  <StaticQuery
    query={graphql`
      query {
        swapi {
          categories {
            title
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
      <>
        {console.log(categories)}
        {categories.map(category => (
            <>
          <div className="wrapper">
            {category.images.map((image,index) => (
                <GraphImg  image={image} />
                
            ))}
             
          </div>
        
          </>
        ))}
        <NameCategory name={categories[1].title} />
      </>
    )}
  />
);

export default MainContent;


//   <GraphImg  image={category.images[1]} maxWidth={800} />