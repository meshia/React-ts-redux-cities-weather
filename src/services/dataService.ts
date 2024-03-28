import { Item } from '../types/dataTypes';

export const fetchCities = async (): Promise<Item[]> => {
    try {
        const response = await fetch("../data.json");
        if(!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        return jsonData.cities as Item[];
    } catch (err) {
        console.error('Error fetching data:', err);
        return [];
    }
};