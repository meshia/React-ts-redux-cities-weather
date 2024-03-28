import React from 'react';
import { Link } from 'react-router-dom';
import { Item } from '../../types/dataTypes';
import styled from 'styled-components';

interface Props {
    item: Item;
}

const StyledListItem = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 15em;
  padding: 0;
  margin: 2em;
  border-radius: 2em;
  cursor: pointer;
  color: var(--primer-color);
  box-shadow: 0 -.5em 0 .3em var(--primer-color);
  transition: box-shadow ease 0.2s;
  h3, h4, h5 {
    margin: 0.4em;
    font-weight: 200;
  }
  div {
    display: flex;
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
        <StyledListItem to={`/city/${item.name}`}>
            <h3>{ item.name.toUpperCase() }</h3>
            <div>
                <h4>{item.country}</h4>
                <h4>{item.continent}</h4>
            </div>
            <SubWrapper>
                { item.image && <img src={item.image} alt={item.name} /> }
            </SubWrapper>
        </StyledListItem>
    )
}

export default ListItem;