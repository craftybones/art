import React from 'react';
import styled from 'styled-components';
import { FaHome, FaUsers } from 'react-icons/fa';
import GlobalStyle from '../components/globalStyle';

let Header = styled.header`
  width: 960px;
  margin: 0 auto;
  a {
    color: black;
    margin-right: 30px;
  }
  a:hover {
    color: gray;
  }
  font-size: 30px;
  padding: 10px;
  nav {
    font-size: 14px;
  }
  display: flex;
`;

let BodyDiv = styled.div`
  border-top: 1px solid lightgray;
  padding-top: 30px;
  width: 960px;
  margin: 0 auto;
`;

export default props => {
  return (
    <div>
      <GlobalStyle />
      <Header>
        <a href="/">
          <FaHome />
        </a>
        <a href="/artists">
          <FaUsers />
        </a>
      </Header>
      <BodyDiv>{props.children}</BodyDiv>
    </div>
  );
};
