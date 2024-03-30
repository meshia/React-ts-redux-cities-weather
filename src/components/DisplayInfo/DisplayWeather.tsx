import React from 'react';
import { WeatherInfo } from '../../types/dataTypes';
import styled from 'styled-components';

const StyledDataDisplay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.4em 0;
  margin: 2em;
  border-radius: 2em;
  color: var(--primer-color);
  background-color: var(--secondary-color);
  box-shadow: 0 -.5em 0 .3em var(--primer-color);
  transition: box-shadow ease 0.2s;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &:hover {
    box-shadow: 0 0 0 .5em var(--primer-color);
  }
`;

const DisplayWeather: React.FC<{weatherInfo:WeatherInfo | null}> = ({ weatherInfo }) => {
    return (
        <StyledDataDisplay>
            <h3>{weatherInfo?.description}</h3>
                <h4>{`Temperature: ${weatherInfo?.main.temp}`}</h4>
                <h4>{`Feels Like: ${weatherInfo?.main.feels_like}`}</h4>
                <h4>{`Max Temperature: ${weatherInfo?.main.temp_max}`}</h4>
                <h4>{`Min Temperature: ${weatherInfo?.main.temp_min}`}</h4>
                <h4>{`Humidity: ${weatherInfo?.main.humidity}`}</h4>
                <h4>{`Pressure: ${weatherInfo?.main.pressure}`}</h4>
                <h4>{`Wind Speed: ${weatherInfo?.wind.speed}`}</h4>
                <h4>{`Wind Degrees: ${weatherInfo?.wind.deg}`}</h4>
        </StyledDataDisplay>
    )
}

export default DisplayWeather;