import { City, CityAction } from '../types/dataTypes';
import { ActionType } from '../types/enums';

export const setCities = (cities: City[]): CityAction => ({
    type: ActionType.SET_CITIES,
    payload: cities,
});

export const sortByCity = (sortBy = "city"): CityAction => ({
    type: ActionType.SORT_BY_CITY,
    payload: sortBy,
});

export const searchCities = (searchValue: string): CityAction => ({
    type: ActionType.SEARCH_CITIES,
    payload: searchValue,
});