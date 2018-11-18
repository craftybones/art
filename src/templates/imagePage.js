import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

let ImageContainer = styled.div`
  width: 960px;
`;

export default props => (
  <ImageContainer>
    <Img fluid={props.data.images.edges[0].node.image.childImageSharp.fluid} />
  </ImageContainer>
);

export const query = graphql`
  query($id: String!) {
    images: allMergedImagesJson(filter: { id: { eq: $id } }) {
      edges {
        node {
          id
          title
          author {
            name
            username
          }
          tags
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
              fluid(maxWidth: 960) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`;
