import React from 'react';
import { Link } from 'react-router-dom';
import { City } from '../../types/dataTypes';
import styled from 'styled-components';

interface Props {
    item: City;
}

const StyledListCity = styled(Link)`
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

const SubWrapper = styled.div`
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 10em;
    overflow: hidden;
    border-radius: 2em;
    img {
        width: 100%;
        height: auto;
    }
`;


const ListItem: React.FC<Props> = ({ item }) => {
    return (
        <StyledListCity to={`/city/${item.name}`}>
            <h3>{ item.name }</h3>
            <div>
                <h4>{item.country}</h4>
                <h4>{item.continent}</h4>
            </div>
            <p>{item.description}</p>
            <SubWrapper>
                { item.image && <img src={item.image} alt={item.name} /> }
            </SubWrapper>
        </StyledListCity>
    )
}

export default ListItem;