import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/reducers';
import { setCities } from '../redux/actions';
import List from '../components/List/List';
import { fetchCities } from '../services/citiesService';

const ListContainer: React.FC = () => {
    const dispatch = useDispatch();
    const filteredCities = useSelector((state: RootState) => state.cities.filteredCities);

    useEffect(()=> {
        if(filteredCities.length === 0) {
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
                dispatch(setCities(uniqueFiltered));
            }
            getData();
        }
    }, []);

    return (
        <>
            { filteredCities.length > 0 
                ? <List items={filteredCities} />
                : <h3>No Results Found...</h3>
            }
        </>
    )
};

export default ListContainer;