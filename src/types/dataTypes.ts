import { Country, Continent } from './enums';

export interface Coords {
    lat: number,
    lng: number
}
export interface Item {
    name: string,
    continent: Continent,
    active: boolean,
    country: Country,
    description: string,
    image: string,
    coords: Coords
}