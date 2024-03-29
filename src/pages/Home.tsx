import React, { useState } from 'react';
import ListContainer from '../containers/ListContainer';
import SearchBar
 from '../components/SearchBar/SearchBar';
const Home: React.FC = () => {
    const [searchValue, setSearchValue] = useState<string>("");

    const handleSearchChange = (value: string) => {
        setSearchValue(value);
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