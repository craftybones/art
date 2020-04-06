import React from 'react';
import styled from 'styled-components';
import TimeAgo from './timeAgo';
import User from './user';
import StyledTags from './tags';
import { Link } from 'gatsby';

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
  position: relative;
  height: 120px;
  width: 150px;
  border: ${props =>
    props.empty ? '0.5px dashed rgba(120,120,120,0.5)' : 'none'};
  box-sizing: border-box;
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

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(80, 80, 80, 0.5);
  height: 100%;
  color: white;
  text-align: top;
`;

const ImageText = styled.div`
  color: white;
  font-size: 24px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
`;

export default ({ name, username, avatar, images, count }) => {
  const tags = images.map(img => img.node.tags[0]);
  const imageContainer = images.slice(0, 3).map(({ node }) => {
    return (
      <ImageContainer>
        <img src={node.image.childImageSharp.resize.src} />
      </ImageContainer>
    );
  });
  for (let i = 0; i < 4 - images.length; i++) {
    imageContainer.push(<ImageContainer empty={true} />);
  }
  if (count > 4) {
    const node = images[3].node;
    imageContainer.push(
      <ImageContainer>
        <img src={node.image.childImageSharp.resize.src} />
        <ImageOverlay>
          <ImageText>+ {count - 4}</ImageText>
        </ImageOverlay>
      </ImageContainer>
    );
  }
  return (
    <CardContainer>
      <Header>
        <User
          avatar={avatar.childImageSharp.resize.src}
          username={username}
          name={name}
        />
        <TimeAgo time={images[0].node.date}></TimeAgo>
      </Header>
      <Link to={`/artists/${username}`}>
        <ImagesContainer>{imageContainer}</ImagesContainer>
      </Link>
      <Footer>
        <StyledTags tags={tags} />
      </Footer>
    </CardContainer>
  );
};
