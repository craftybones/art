import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

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
    <Username>{props.username}</Username>
  </UserWrapper>
);

const TimeAgo = styled.h4`
  margin: 0 0 0 0;
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

const CardContainer = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid lightgray;
`;

const Card = props => {
  let fluid = props.node.image.childImageSharp.fluid;
  let avatar = props.node.avatar.childImageSharp.original.src;
  return (
    <CardContainer>
      <Header>
        <User avatar={avatar} username={props.node.author.name} />
        <div>
          <TimeAgo>4d</TimeAgo>
        </div>
      </Header>
      <Img fluid={fluid} />
    </CardContainer>
  );
};

export default Card;
