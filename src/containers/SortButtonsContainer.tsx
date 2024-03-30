import React from 'react';
import { useDispatch } from 'react-redux';
import { sortBy, SetCurrentLocations } from '../redux/actions';
import Button from '../components/Button/Button';
import styled from 'styled-components';
import getCurrentLocation, { defaultCoords } from '../services/currentLocationService';

const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: none;
  background-color: none;
`;

const SortButtonsContainer: React.FC = () => {
    const dispatch = useDispatch();

    const fetchLocation = async () => {
        try {
          const { lat, lng } = await getCurrentLocation();
          return ({ lat, lng });
        } catch (error) {
          return defaultCoords;
        }
    };
    
    fetchLocation().then((res) => {
        dispatch(SetCurrentLocations(res));
    })

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