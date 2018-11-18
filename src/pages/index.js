import React from 'react';
import { graphql } from 'gatsby';
import Gallery from '../components/gallery';
import Layout from '../layouts/index';

export default ({ data }) => (
  <Layout>
    <Gallery images={data.images} />
  </Layout>
);

export const pageQuery = graphql`
  query {
    images: allMergedImagesJson {
      edges {
        node {
          ...GalleryPosts
        }
      }
    }
  }
`;
