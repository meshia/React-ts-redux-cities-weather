import { Country, Continent } from './enums';

interface Coords {
    lat: number,
    lng: number
}

interface Item {
    name: string,
    continent: Continent,
    active: boolean,
    country: Country,
    description: string,
    image: string,
    coords: Coords
}