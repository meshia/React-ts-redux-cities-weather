import { City, CityAction, Coords } from '../types/dataTypes';
import { ActionType } from '../types/enums';

export const setCities = (cities: City[]): CityAction => ({
    type: ActionType.SET_CITIES,
    payload: cities,
});

export const SetCurrentLocations = (currentCoords: Coords): CityAction => ({
    type: ActionType.SET_CURRENT_LOCATION,
    payload: currentCoords,
});

export const selectCity = (city: City): CityAction => ({
    type: ActionType.SELECT_CITY,
    payload: city,
});

export const sortBy = (sortBy:string = "city"): CityAction => ({
    type: ActionType.SORT_BY,
    payload: sortBy,
});

export const searchCities = (searchValue: string): CityAction => ({
    type: ActionType.SEARCH_CITIES,
    payload: searchValue,
});