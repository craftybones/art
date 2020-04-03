import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

export default styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    color: gray;
  }
`;
