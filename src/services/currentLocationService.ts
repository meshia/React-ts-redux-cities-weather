import { Coords } from '../types/dataTypes';

export const defaultCoords:Coords = {
    lat: 32.0853,
    lng: 34.7818,
}

const getCurrentLocation = () => {
    return new Promise<Coords>((resolve, reject) => {
        if(!navigator.geolocation) {
            console.error(`No geolocation - using default location`);
            resolve(defaultCoords);
        } else {
            navigator.geolocation.getCurrentPosition((position)=> {
                const { latitude, longitude } = position.coords;
                resolve({ lat:latitude, lng: longitude});
            }, (error) => {
                console.error(`ERROR: ${error} - using default location`);
                resolve(defaultCoords);
            })
        }
    })
}

export default getCurrentLocation;