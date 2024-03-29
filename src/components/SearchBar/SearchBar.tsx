import React from 'react';
import styled from 'styled-components';

interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
}

const Input = styled.input`
    width: 50%;
    height: 1.5em;
    padding: 0.5em;
    border: 1px solid var(--primer-color);
    border-radius: 2em;
    font-size: 1.2em;
    &:focus-visible {
        color: var(--primer-color);
    }
`;

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    return <Input type="text" placeholder="Search..." value={value} onChange={handleChange} />
}

export default SearchBar;