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
  width: 15em;
  border: 1px solid;
  border-radius: 2em;
  padding: 0.5em;
  margin: 0.5em;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  h3, h4 {
    margin: 0.4em;
  }
  div {
    display: flex;
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
            <h3>{ item.name }</h3>
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