import React from 'react';
import { graphql } from 'gatsby';
import Gallery from '../components/gallery';
import Layout from '../layouts/index';
import {createGlobalStyle} from 'styled-components';

const GlobalStyle=createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Ubuntu:300,400');

  body {
    font-family: 'Ubuntu', sans-serif;
  }
`

export default ({ data }) => (
  <Layout>
    <GlobalStyle/>
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
