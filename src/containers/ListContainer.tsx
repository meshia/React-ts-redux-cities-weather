import React, { useEffect, useState } from 'react';
import List from '../components/List/List';
import { fetchCities } from '../services/dataService';
import { Item } from '../types/dataTypes';

const ListContainer: React.FC = () => {
    const [ items, setItems ] = useState<Item[]>([]);

    useEffect(()=> {
        const getData = async () => {
            const fetchedData = await fetchCities(); // fetch data from service
            const uniqueMap: Map<string, boolean> = new Map();
            const uniqueFiltered = fetchedData.filter((item) => { 
                if(!item.active) return false; // filter out not active items
                if(uniqueMap.has(item.name)) { // filter out duplicates
                    return false;
                } else {
                    uniqueMap.set(item.name, true);
                    return true;
                }
            });
            setItems(uniqueFiltered); 
        }
        getData();
    }, []);

    return <List items={items} />
};

export default ListContainer;