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
  query($tag: String!) {
    images: allMergedImagesJson(filter: { tags: { in: [$tag] } }) {
      edges {
        node {
          ...GalleryPosts
        }
      }
    }
  }
`;
