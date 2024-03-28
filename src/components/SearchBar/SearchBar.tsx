import React from 'react';
import styled from 'styled-components';

interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
}

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    return <Input type="text" placeholder="Search..." value={value} onChange={handleChange} />
}

export default SearchBar;