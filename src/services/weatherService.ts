import { Coords, WeatherInfo } from '../types/dataTypes';

export const fetchWeather = async (coords:Coords): Promise<WeatherInfo | null> => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lng}&appid=f99334eaf77bfe647442003f271e0075&units=metric`);
        if(!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        const desc = jsonData?.weather[0];
        const parsedWether = {
            main: {...jsonData?.main },
            wind: {...jsonData?.wind },
            description: desc.description
        }
        return parsedWether;
    } catch (err) {
        console.error('Error fetching data:', err);
        return null;
    }
};