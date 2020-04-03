import React from 'react';
import styled from 'styled-components';
import StyledLink from './styledLink';

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

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export default props => (
  <StyledLink to={`/artists/${props.username}`}>
    <UserWrapper>
      <Avatar src={props.avatar} />
      <Username>{props.name}</Username>
    </UserWrapper>
  </StyledLink>
);
