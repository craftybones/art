const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const userTemplate = path.resolve('src/templates/artistPage.js');
  const tagTemplate = path.resolve('src/templates/tagPage.js');
  const imageTemplate = path.resolve('src/templates/imagePage.js');
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        query {
          allMergedAuthorsJson {
            edges {
              node {
                name
                username
                id
              }
            }
          }
          allMergedImagesJson(sort: { fields: [date], order: DESC }) {
            group(field: tags) {
              fieldValue
            }
            edges {
              node {
                id
              }
            }
          }
        }
      `).then(result => {
        result.data.allMergedAuthorsJson.edges.forEach(({ node }) => {
          createPage({
            path: `/artists/${node.username}`,
            component: userTemplate,
            context: { username: node.id },
          });
        });
        result.data.allMergedImagesJson.group.forEach(({ fieldValue }) => {
          createPage({
            path: `/tagged/${fieldValue}`,
            component: tagTemplate,
            context: { tag: fieldValue },
          });
        });
        result.data.allMergedImagesJson.edges.forEach(({ node }) => {
          createPage({
            path: `/images/${node.id}`,
            component: imageTemplate,
            context: { id: node.id },
          });
        });
        resolve();
      })
    );
  });
};
