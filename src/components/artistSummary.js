import React from 'react';
import styled from 'styled-components';
import User from './user';

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  padding-bottom: 10px;
  padding-top: 10px;
  padding: 10px;
`;

const ImagesContainer = styled.div`
  height: 240px;
  width: 300px;
  display: flex;
  flex-wrap: wrap;
`;

const ImageContainer = styled.div`
  height: 120px;
  width: 150px;
`;

const Footer = styled.div`
  border-top: 1px solid lightgray;
  font-size: 14px;
  font-weight: 300;
  padding: 10px;
  overflow: hidden;
`;

const CardContainer = styled.div`
  width: 300px;
  border: 1px solid lightgray;
  box-sizing: content-box;
`;

export default ({ name, username, avatar, images }) => {
  let imageContainer = images.slice(0, 4).map(({ node }) => {
    return (
      <ImageContainer>
        <img src={node.image.childImageSharp.resize.src} />
      </ImageContainer>
    );
  });
  return (
    <CardContainer>
      <Header>
        <User
          avatar={avatar.childImageSharp.resize.src}
          username={username}
          name={name}
        />
      </Header>
      <ImagesContainer>{imageContainer}</ImagesContainer>
      <Footer></Footer>
    </CardContainer>
  );
};
