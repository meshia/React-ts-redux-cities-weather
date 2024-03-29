import React from 'react';
import Button from '../components/Button/Button';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/reducers';
import { sortByCity } from '../redux/actions';

const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: none;
  background-color: none;
`;

const SortButtonsContainer: React.FC = () => {
    const dispatch = useDispatch();
    const sortedCities = useSelector((state: RootState) => state.cities.filteredCities);

    const handleSortByName = () => {
        dispatch(sortByCity())
        console.log("sort by name", sortedCities);
    }

    const handleSortByDistance = () => {
        console.log("sort by distance")
    }

    return (
        <StyledButtonContainer>
            <Button label="Sort by Name" onClick={handleSortByName} />
            <Button label="Sort by Distance" onClick={handleSortByDistance} />
        </StyledButtonContainer>
    )
};

export default SortButtonsContainer;