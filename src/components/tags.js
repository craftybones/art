import React from 'react';
import styled from 'styled-components';
import StyledLink from './styledLink';

const prependTaggedPath = t => `/tagged/${t}`;
const prependHash = t => (t.startsWith('#') ? t : `#${t}`);
const tagId = (t, i) => `${t}_${i}`;

const Tags = props => {
  const hashTags = props.tags.slice(0, 3).map((t, i) => (
    <StyledLink to={prependTaggedPath(t)} key={tagId(t, i)}>
      {prependHash(t)}
    </StyledLink>
  ));
  return <div className={props.className}>{hashTags}</div>;
};

export default styled(Tags)`
  & > a {
    margin-right: 10px;
  }

  &:last-child {
    margin-right: 0px;
  }
`;
