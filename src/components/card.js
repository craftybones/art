import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Link, graphql } from 'gatsby';

const Avatar = styled.img`
  width: 48px;
  height: 48px;
  flex: 0 0 48px;
  margin: 0;
  border-radius: 50%;
`;
const Username = styled.h2`
  margin: 0 0 0 0;
  padding-left: 10px;
`;

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const User = props => (
  <UserWrapper>
    <Avatar src={props.avatar} />
    <Link to={`/artists/${props.username}`}>
      <Username>{props.name}</Username>
    </Link>
  </UserWrapper>
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
  margin-bottom: 5px;
`;

const ImageContainer = styled.div`
  height: 240px;
`;

const Footer = styled.div`
  font-size: 14px;
`;

const CardContainer = styled.div`
  width: 300px;
  border: 1px solid lightgray;
`;

const Tags = props => {
  const prependHash = t => `#${t}`;
  const prependTaggedPath = t => `/tagged/${t}`;
  const tagId = (t, i) => `${t}_${i}`;
  let hashTags = props.tags.slice(0, 3).map((t, i) => (
    <Link to={prependTaggedPath(t)} key={tagId(t, i)}>
      {' '}
      {prependHash(t)}{' '}
    </Link>
  ));
  return <div className={props.className}>{hashTags}</div>;
};

const StyledTags = styled(Tags)`
  & > a {
    font-size: 14px;
    margin-right: 5px;
  }

  &:last-child {
    margin-right: 0px;
  }
`;

const Card = props => {
  let fluid = props.node.image.childImageSharp.fluid;
  let avatar = props.node.avatar.childImageSharp.original.src;
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
        <Img fluid={fluid} />
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
`;
