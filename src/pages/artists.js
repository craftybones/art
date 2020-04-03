import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts/index';
import ArtistSummary from '../components/artistSummary';
import Gallery from '../components/gallery';
import keyBy from 'lodash/keyBy';

export default ({ data }) => {
  const authors = data.allMergedImagesJson.group;
  const authorsInfo = keyBy(data.allMergedAuthorsJson.edges, 'node.name');
  const summaries = authors.map(author => {
    const name = authorsInfo[author.fieldValue].node.name;
    const username = authorsInfo[author.fieldValue].node.username;
    const avatar = author.edges[0].node.avatar;
    return (
      <ArtistSummary
        name={name}
        username={username}
        avatar={avatar}
        images={author.edges}
      ></ArtistSummary>
    );
  });
  return (
    <Layout>
      <Gallery cards={summaries}></Gallery>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allMergedImagesJson {
      group(field: author___name) {
        totalCount
        fieldValue
        edges {
          node {
            avatar {
              childImageSharp {
                resize(width: 20, height: 20) {
                  src
                }
              }
            }
            date
            image {
              childImageSharp {
                resize(width: 150, height: 120, cropFocus: CENTER) {
                  width
                  src
                }
              }
            }
            tags
          }
        }
      }
    }
    allMergedAuthorsJson {
      edges {
        node {
          id
          name
          username
        }
      }
    }
  }
`;
