import { Country, Continent, ActionType } from './enums';

export interface Coords {
    lat: number,
    lng: number
}
export interface City {
    name: string,
    continent: Continent,
    active: boolean,
    country: Country,
    description: string,
    image: string,
    coords: Coords
}

export interface WeatherInfo {
    main: {
        feels_like: number,
        humidity: number,
        pressure: number,
        temp: number,
        temp_max: number,
        temp_min: number,
    }
    wind: {
        deg: number,
        speed: number,
    }
    description: string,
}

export interface CityState {
    cities: City[];
    filteredCities: City[];
    selectedCity: City | null;
    searchValue: string;
}

interface SetCitiesAction {
    type: typeof ActionType.SET_CITIES;
    payload: City[];
    [key: string]: any;
}

interface SearchCitiesAction {
    type: typeof ActionType.SEARCH_CITIES;
    payload: string;
    [key: string]: any;
}

interface SortByAction {
    type: typeof ActionType.SORT_BY;
    payload: string;
    [key: string]: any;
}

interface SelectCityAction {
    type: typeof ActionType.SELECT_CITY;
    payload: City;
    [key: string]: any;
}

export type CityAction = SetCitiesAction | SearchCitiesAction | SortByAction | SelectCityAction;