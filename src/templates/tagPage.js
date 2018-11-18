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
          title
          author {
            name
            username
          }
          username
          avatar {
            childImageSharp {
              original {
                src
              }
            }
          }
          image {
            childImageSharp {
              fluid(maxWidth: 300, traceSVG: { blackOnWhite: false }) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`;
