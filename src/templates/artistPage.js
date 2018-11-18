import React from 'react';
import { graphql } from 'gatsby';
import Gallery from '../components/gallery';

export default ({ data }) => {
  return <Gallery images={data.images} />;
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
