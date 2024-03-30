import React from 'react';
import { City } from '../../types/dataTypes';
import styled from 'styled-components';

const StyledDataDisplay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.4em 0;
  margin: 2em;
  border-radius: 2em;
  color: var(--primer-color);
  box-shadow: 0 -.5em 0 .3em var(--primer-color);
  transition: box-shadow ease 0.2s;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  p {
    padding: 0 0.5em;
    font-size: 0.8em;
  }
  &:hover {
    box-shadow: 0 0 0 .5em var(--primer-color);
  }
`;

const DisplayData: React.FC<{item:City | null}> = ({ item }) => {
    return (
        <StyledDataDisplay>
            <h3>{ item?.name }</h3>
            <div>
                <h4>{item?.country}</h4>
                <h4>{item?.continent}</h4>
            </div>
            <p>{item?.description}</p>
        </StyledDataDisplay>
    )
}

export default DisplayData;