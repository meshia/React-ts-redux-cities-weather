import React from 'react';
import ListItem from './ListItem';
import { Item } from '../../types/dataTypes';
import styled from 'styled-components';

interface Props {
    items: Item[];
}

const StyledList = styled.ul`
    display:flex;
    flex-flow: row wrap;
    list-style-type: none;
    padding: 0;
`;

const List: React.FC<Props> = ({ items }) => {
    return (
        <StyledList>
            {Object.values(items).map((item) =>{
                return(
                <ListItem key={`${item.name}-${item.country}`} item={item} />
            )})}
        </StyledList>
    )
}

export default List;