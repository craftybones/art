import React from 'react';
import { graphql } from 'gatsby';
import Gallery from '../components/gallery';

export default ({ data }) => <Gallery images={data.images} />;

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
