import React from 'react';
import { graphql } from 'gatsby';
import Gallery from '../components/gallery';
import Layout from '../layouts/index';
import Card from '../components/card';

export default ({ data }) => {
  const cards = data.images.edges.map(x => {
    return <Card node={x.node}></Card>;
  });

  return (
    <Layout>
      <Gallery cards={cards} />
    </Layout>
  );
};

export const query = graphql`
  query($username: String!) {
    images: allMergedImagesJson(
      filter: { username: { eq: $username } }
      sort: { fields: [date], order: DESC }
    ) {
      edges {
        node {
          ...GalleryPosts
        }
      }
    }
  }
`;
