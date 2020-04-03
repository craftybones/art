import React from 'react';
import { graphql } from 'gatsby';
import Gallery from '../components/gallery';
import Card from '../components/card';
import Layout from '../layouts/index';

export default ({ data }) => {
  const cards = data.images.edges.map(x => {
    return <Card node={x.node}></Card>;
  });
  return (
    <Layout>
      <Gallery cards={cards} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    images: allMergedImagesJson(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          ...GalleryPosts
        }
      }
    }
  }
`;
