import { City, CityAction } from '../types/dataTypes';
import { ActionType } from '../types/enums';

export const setCities = (cities: City[]): CityAction => ({
    type: ActionType.SET_CITIES,
    payload: cities,
});

export const searchCities = (searchValue: string): CityAction => ({
    type: ActionType.SEARCH_CITIES,
    payload: searchValue,
});