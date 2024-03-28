import React from 'react';
import { useParams } from 'react-router-dom';
import { Item } from '../types/dataTypes';

const DetailsPage: React.FC = () => {
    const { name } = useParams<{name: string}>();

    return (
        <div className='details-page'>
            <h2>{ name }</h2>
        </div>
    )
}

export default DetailsPage;