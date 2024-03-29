import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchCities } from '../redux/actions';
import SearchBar from '../components/SearchBar/SearchBar';

const SearchContainer: React.FC = () => {
    const [searchValue, setSearchValue] = useState<string>("");
    const dispatch = useDispatch();

    const handleSearchChange = (value: string) => {
        setSearchValue(value);
        dispatch(searchCities(value));
    }
    return <SearchBar value={searchValue} onChange={handleSearchChange} />
};

export default SearchContainer;