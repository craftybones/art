import React from 'react';
import styled from 'styled-components';
import Moment from 'react-moment';

const TimeContainer = props => {
  return (
    <Moment className={props.className} fromNow>
      {props.time}
    </Moment>
  );
};

export default styled(TimeContainer)`
  font-size: 12px;
`;
