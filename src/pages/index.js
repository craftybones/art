import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Gallery from '../components/gallery';

export default ({ data }) => <Gallery images={data.images}/>;

export const pageQuery = graphql`
query {
  images: allMergedImagesJson {
    edges {
      node {
        title
        author {
          name
        }
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
