import React from 'react';
import styled from 'styled-components';
import { FaHome } from 'react-icons/fa';

let Header = styled.header`
  width: 960px;
  margin: 0 auto;
  a {
    color: black;
  }
  a:hover {
    color: gray;
  }
  font-size: 30px;
  padding: 10px;
`;

let BodyDiv = styled.div`
  width: 960px;
  margin: 0 auto;
`;

export default props => {
  return (
    <div>
      <Header>
        <a href="/">
          <FaHome />
        </a>
      </Header>
      <BodyDiv>{props.children}</BodyDiv>
    </div>
  );
};
