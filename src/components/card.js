import React from 'react';
import styled from 'styled-components';
import StyledLink from './styledLink';
import { Link, graphql } from 'gatsby';
import TimeAgo from './timeAgo';
import User from './user';
import StyledTags from './tags';

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  padding-bottom: 10px;
  padding-top: 10px;
  padding: 10px;
`;

const ImageContainer = styled.div`
  height: 240px;
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
`;

const prependImagePath = t => `/images/${t}`;

const Card = props => {
  let resize = props.node.image.childImageSharp.resize;
  let avatar = props.node.avatar.childImageSharp.resize.src;
  return (
    <CardContainer>
      <Header>
        <User
          avatar={avatar}
          name={props.node.author.name}
          username={props.node.author.username}
        />
        <TimeAgo time={props.node.date}></TimeAgo>
      </Header>
      <ImageContainer>
        <Link to={prependImagePath(props.node.id)}>
          <img src={resize.src} alt={props.node.id} />
        </Link>
      </ImageContainer>
      <Footer>
        <StyledTags tags={props.node.tags} />
      </Footer>
    </CardContainer>
  );
};

export default Card;

export const query = graphql`
  fragment GalleryPosts on MergedImagesJson {
    id
    title
    date
    author {
      name
      username
    }
    tags
    username
    avatar {
      childImageSharp {
        resize(width: 20, height: 20) {
          src
        }
      }
    }
    image {
      childImageSharp {
        resize(width: 300, height: 240, cropFocus: CENTER) {
          width
          src
        }
      }
    }
  }
`;
