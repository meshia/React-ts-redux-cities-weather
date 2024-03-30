import React from 'react';
import Button from '../components/Button/Button';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { sortBy } from '../redux/actions';

const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: none;
  background-color: none;
`;

const SortButtonsContainer: React.FC = () => {
    const dispatch = useDispatch();

    const handleSortByName = () => {
        dispatch(sortBy("city"))
    }

    const handleSortByDistance = () => {
        dispatch(sortBy("distance"))
    }

    return (
        <StyledButtonContainer>
            <Button label="Sort by Name" onClick={handleSortByName} />
            <Button label="Sort by Distance" onClick={handleSortByDistance} />
        </StyledButtonContainer>
    )
};

export default SortButtonsContainer;