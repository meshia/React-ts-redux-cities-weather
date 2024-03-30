import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/reducers';
import { searchCities } from '../redux/actions';
import SearchBar from '../components/SearchBar/SearchBar';

const SearchContainer: React.FC = () => {
    const dispatch = useDispatch();
    const searchValue = useSelector((state: RootState) => state.cities.searchValue);

    useEffect(() => {
        if(searchValue.length > 0) {
            dispatch(searchCities(searchValue));
        }
    },[]);

    const handleSearchChange = (value: string) => {
        dispatch(searchCities(value));
    }
    return <SearchBar value={searchValue} onChange={handleSearchChange} />
};

export default SearchContainer;