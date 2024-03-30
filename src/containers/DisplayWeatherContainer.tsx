import React, { useEffect, useState } from 'react';
import { City, WeatherInfo } from '../types/dataTypes';
import DisplayWeather from '../components/DisplayInfo/DisplayWeather';
import { fetchWeather } from '../services/weatherService';

const DisplayWeatherContainer: React.FC<{item:City | null}> = ({item}) => {
    const [weatherInfo, setWeatherInfo] = useState<WeatherInfo | null>(null);

    useEffect(()=> {
        if(item) {
            const getData = async () => {
                const fetchedData = await fetchWeather(item.coords); // fetch data from service
                setWeatherInfo(fetchedData);
            }
            getData();
        }
    }, []);

    return <DisplayWeather weatherInfo={weatherInfo} />
};

export default DisplayWeatherContainer;