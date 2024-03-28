import React from 'react';
import { Item } from '../../types/dataTypes';

interface Props {
    items: Item[];
}

const List: React.FC<Props> = ({ items }) => {
    return (
        <ul>
            {Object.values(items).map((item) =>{
                return(
                <li key={`${item.name}-${item.country}`}>{item.name}</li>
            )})}
        </ul>
    )
}

export default List;