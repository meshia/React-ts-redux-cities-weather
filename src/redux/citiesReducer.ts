import { Reducer } from 'redux';
import { CityAction, CityState, City, Coords } from '../types/dataTypes';
import { ActionType } from '../types/enums';
import { calculateDistance } from '../utils/calculations';
import getCurrentLocation, { defaultCoords } from '../services/currentLocationService';

const currentLocation: Coords = {...defaultCoords};

const initialState: CityState = {
    cities: [],
    filteredCities: [],
    selectedCity: null,
}

const fetchLocation = async () => {
    try {
      const { lat, lng } = await getCurrentLocation();
      return ({ lat, lng });
    } catch (error) {
      return defaultCoords;
    }
};

fetchLocation().then((res) => {
    currentLocation.lat = res.lat;
    currentLocation.lng = res.lng;
})

export const citiesReducer: Reducer<CityState, CityAction> = (state = initialState, action: CityAction) => {
    switch (action.type) {
        case ActionType.SET_CITIES:
            return {...state, cities: action.payload, filteredCities: action.payload};
        case ActionType.SELECT_CITY:
            return { ...state, selectedCity: action.payload };
        case ActionType.SEARCH_CITIES:
            const filteredCities = state.cities.filter( city => 
              city.name.toLowerCase().includes((action.payload).toLocaleLowerCase()) || // search by city name
              city.country.toLowerCase().includes((action.payload).toLocaleLowerCase()) // search by country name
            );
            return {...state, filteredCities};
        case ActionType.SORT_BY:
            const sortededCities = state.cities.toSorted((cityA:City, cityB:City) => {
                if(action.payload === "distance") {
                    const distanceA = calculateDistance(cityA.coords.lat, cityA.coords.lng, currentLocation.lat, currentLocation.lng);
                    const distanceB = calculateDistance(cityB.coords.lat, cityB.coords.lng, currentLocation.lat, currentLocation.lng);
                    return distanceA <  distanceB ? -1 : 1;
                } else {
                    return cityA.name.toLowerCase() < cityB.name.toLowerCase() ? -1 : 1
                }
            });
            return {...state, filteredCities: sortededCities};
        default:
            return state;
    }
}