import { Reducer } from 'redux';
import { CityAction, CityState, City } from '../types/dataTypes';
import { ActionType } from '../types/enums';

const initialState: CityState = {
    cities: [],
    filteredCities: [],
    selectedCity: null,
}

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
        case ActionType.SORT_BY_CITY:
            const sortededCities = state.cities.toSorted((cityA:City, cityB:City) => 
            ( cityA.name.toLowerCase() < cityB.name.toLowerCase()) ? -1 : 1 );
            return {...state, filteredCities: sortededCities};
        default:
            return state;
    }
}