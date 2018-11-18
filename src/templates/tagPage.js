import React from 'react';
import { graphql } from 'gatsby';
import Gallery from '../components/gallery';

export default ({ data }) => {
  return <Gallery images={data.images} />;
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
