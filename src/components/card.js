import React from 'react';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';

const Avatar = styled.img`
  width: 20px;
  height: 20px;
  flex: 0 0 20px;
  margin: 0;
`;

const Username = styled.div`
  margin: 0 0 0 0;
  padding-left: 6px;
  font-size: 16px;
`;

let StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    color: gray;
  }
`
const UserWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const User = props => (
  <StyledLink to={`/artists/${props.username}`}>
    <UserWrapper>
      <Avatar src={props.avatar} />
      <Username>{props.name}</Username>
    </UserWrapper>
  </StyledLink>
);

const TimeAgo = styled.div`
  font-size: 14px;
`;

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
  font-size: 14px;
  font-weight: 300;
  padding: 10px;
`;

const CardContainer = styled.div`
  width: 300px;
  border: 1px solid lightgray;
`;

const prependTaggedPath = t => `/tagged/${t}`;
const tagId = (t, i) => `${t}_${i}`;
const prependHash = t => `#${t}`;
const prependImagePath = t => `/images/${t}`;

const Tags = props => {
  let hashTags = props.tags.slice(0, 3).map((t, i) => (
    <StyledLink to={prependTaggedPath(t)} key={tagId(t, i)}>
      {' '}
      {prependHash(t)}{' '}
    </StyledLink>
  ));
  return <div className={props.className}>{hashTags}</div>;
};

const StyledTags = styled(Tags)`
  & > a {
    margin-right: 5px;
  }

  &:last-child {
    margin-right: 0px;
  }
`;

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
        <div>
          <TimeAgo>4d</TimeAgo>
        </div>
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
