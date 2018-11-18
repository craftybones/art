import React from 'react';
import styled from 'styled-components';
import Card from './card';
import chunk from 'lodash/chunk';

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 960px;
  margin: 0 auto;
`;

const GalleryRow = props => {
  let cards = props.images.map(x => {
    return <Card node={x.node} key={x.node.id} />;
  });
  return <Row>{cards}</Row>;
};

const GalleryContainer = styled.div`
  & > * {
    margin-bottom: 30px;
  }

  &:last-child {
    margin-bottom: 0px;
  }
`

const Gallery = props => {
  let chunked = chunk(props.images.edges, 3);
  let rows = chunked.map((row, index) => (
    <GalleryRow images={row} key={index} />
  ));
  return <GalleryContainer>{rows}</GalleryContainer>;
};

export default Gallery;
