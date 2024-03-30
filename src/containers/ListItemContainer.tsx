import React from 'react';
import { useDispatch } from 'react-redux';
import { selectCity } from '../redux/actions';
import { Link } from 'react-router-dom';
import { City } from '../types/dataTypes';
import ListItem from '../components/List/ListItem';

const ListItemContainer: React.FC<{item: City}> = ({ item }) => {
    const dispatch = useDispatch();
    const HandleSelectCity = () => {
        dispatch(selectCity(item));
    }
    return (
        <Link to={`/city/${item.name}`}>
            <ListItem item={item} onClick={HandleSelectCity} />
        </Link>
    )
}

export default ListItemContainer;