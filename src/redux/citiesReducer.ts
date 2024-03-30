import { Reducer } from 'redux';
import { CityAction, CityState, City } from '../types/dataTypes';
import { ActionType } from '../types/enums';
import { calculateDistance } from '../utils/calculations';
import { defaultCoords } from '../services/currentLocationService';

const initialState: CityState = {
    cities: [],
    filteredCities: [],
    searchValue: "",
    selectedCity: null,
    currentCoords: defaultCoords,
}

export const citiesReducer: Reducer<CityState, CityAction> = (state = initialState, action: CityAction) => {
    switch (action.type) {
        case ActionType.SET_CITIES:
            return {...state, cities: action.payload, filteredCities: action.payload};
        case ActionType.SET_CURRENT_LOCATION:
            return {...state, currentCoords: action.payload};
        case ActionType.SELECT_CITY:
            return { ...state, selectedCity: action.payload };
        case ActionType.SEARCH_CITIES:
            const filteredCities = state.cities.filter( city => 
              city.name.toLowerCase().includes((action.payload).toLocaleLowerCase()) || // search by city name
              city.country.toLowerCase().includes((action.payload).toLocaleLowerCase()) // search by country name
            );
            return {...state, filteredCities:filteredCities, searchValue: action.payload };
        case ActionType.SORT_BY:
            const sortededCities = state.filteredCities.toSorted((cityA:City, cityB:City) => {
                if(action.payload === "distance") {
                    const distanceA = calculateDistance(cityA.coords.lat, cityA.coords.lng, state.currentCoords.lat, state.currentCoords.lng);
                    const distanceB = calculateDistance(cityB.coords.lat, cityB.coords.lng, state.currentCoords.lat, state.currentCoords.lng);
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