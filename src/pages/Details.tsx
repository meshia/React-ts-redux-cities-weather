import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledBackLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 1;
  transition: opacity ease 0.2s;
  &:hover {
    opacity: 0.5;
  }
`;

const DetailsPage: React.FC = () => {
    const { name } = useParams<{name: string}>();

    return (
        <div className='details-page'>
            <h2>{ name }</h2>
            <StyledBackLink to={`/`}><h3>{`< Back To List`}</h3></StyledBackLink>
        </div>
    )
}

export default DetailsPage;