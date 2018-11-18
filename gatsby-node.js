const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const userTemplate = path.resolve('src/templates/artistPage.js');
  const tagTemplate = path.resolve('src/templates/tagPage.js');
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
          allMergedImagesJson {
            group(field: tags) {
              fieldValue
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
        resolve();
      })
    );
  });
};
