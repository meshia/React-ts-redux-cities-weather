import React from 'react';
import { City } from '../../types/dataTypes';
import styled from 'styled-components';
import Image from '../Image/Image';

interface Props {
    item: City;
    onClick: () => void;
}

const StyledListCity = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 15em;
  padding: 0.4em 0;
  margin: 2em;
  border-radius: 2em;
  cursor: pointer;
  color: var(--primer-color);
  box-shadow: 0 -.5em 0 .3em var(--primer-color);
  transition: box-shadow ease 0.2s;
  div {
    display: flex;
  }
  p {
    padding: 0 0.5em;
    font-size: 0.8em;
  }
  &:hover {
    box-shadow: 0 0 0 .5em var(--primer-color);
  }
`;

const ListItem: React.FC<Props> = ({ item, onClick }) => {
    return (
        <StyledListCity onClick={onClick}>
            <h3>{ item.name }</h3>
            <div>
                <h4>{item.country}</h4>
                <h4>{item.continent}</h4>
            </div>
            <p>{item.description}</p>
            { item.image && <Image label={item.name} imageUrl={item.image} /> }
        </StyledListCity>
    )
}

export default ListItem;