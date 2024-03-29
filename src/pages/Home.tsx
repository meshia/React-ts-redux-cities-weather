import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/reducers';
import { searchCities } from '../redux/actions';
import ListContainer from '../containers/ListContainer';
import SearchBar from '../components/SearchBar/SearchBar';

const Home: React.FC = () => {
    const [searchValue, setSearchValue] = useState<string>("");
    const dispatch = useDispatch();

    const handleSearchChange = (value: string) => {
        setSearchValue(value);
        dispatch(searchCities(value));
    }

    return (
        <div className='home-page'>
            <h1>CITIES</h1>
            <SearchBar value={searchValue} onChange={handleSearchChange} />
            <ListContainer />
        </div>
    )
}

export default Home;