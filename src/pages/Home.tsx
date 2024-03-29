import React from 'react';
import ListContainer from '../containers/ListContainer';
import SearchContainer from '../containers/SearchContainer';
import SortButtonsContainer from '../containers/SortButtonsContainer';

const Home: React.FC = () => {
    
    return (
        <div className='home-page'>
            <h1>CITIES</h1>
            <SearchContainer />
            <SortButtonsContainer />
            <ListContainer />
        </div>
    )
}

export default Home;