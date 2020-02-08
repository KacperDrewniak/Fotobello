const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const categoryTemplate = path.resolve(`src/templates/categoryTemplate.js`);

  const categoriesQuery = await graphql(`
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
  `);

  console.log("-----------");
  console.log("-----------");
  console.log("-----------");

  console.log(categoriesQuery.data.swapi.categories);

  categoriesQuery.data.swapi.categories.forEach(category => {
    createPage({
      ca
    });
  });
  console.log("-----------");
  console.log("-----------");
  console.log("-----------");
};
