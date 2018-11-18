import React from 'react';
import { graphql } from 'gatsby';
import Gallery from '../components/gallery';
import Layout from '../layouts/index';

export default ({ data }) => {
  return (
    <Layout>
      <Gallery images={data.images} />
    </Layout>
  );
};

export const query = graphql`
  query($username: String!) {
    images: allMergedImagesJson(filter: { username: { eq: $username } }) {
      edges {
        node {
          ...GalleryPosts
        }
      }
    }
  }
`;
