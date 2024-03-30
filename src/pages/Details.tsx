import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducers';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Image from '../components/Image/Image';
import DisplayData from '../components/DisplayInfo/DisplayData';
import DisplayWeatherContainer from '../containers/DisplayWeatherContainer';
import styled from 'styled-components';

const StyledBackLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 1;
  transition: opacity ease 0.2s;
  &:hover {
    opacity: 0.5;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  height: 80vh;
  div {
    width:45%;
  }
  .image-wrapper {
    height: 100%;
    img {
      width: auto;
      height: 100%;
    }
  }
`;

const DetailsPage: React.FC = () => {
    const { name } = useParams<{name: string}>();
    const selectedCity = useSelector((state: RootState) => state.cities.selectedCity);

    return (
        <div className='details-page'>
            <h2>{ name }</h2>
            <StyledBackLink to={`/`}><h4>{`< Back To List`}</h4></StyledBackLink>
            <StyledContainer>
              <DisplayData item={selectedCity} />
              <DisplayWeatherContainer item={selectedCity} />
              <Image imageUrl={selectedCity?.image} label={ selectedCity?.name} />
            </StyledContainer>
        </div>
    )
}

export default DetailsPage;