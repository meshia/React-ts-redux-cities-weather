import React from 'react';
import styled from 'styled-components';

interface Props {
    label: string,
    onClick: () => void;
}

const StyledButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.4em;
  margin: 1em;
  border: none;
  border-radius: 2em;
  cursor: pointer;
  color: var(--primer-color);
  background-color: var(--secondary-color);
  box-shadow: 0 -.2em 0 .2em var(--primer-color);
  transition: box-shadow ease 0.2s;
  &:hover {
    box-shadow: 0 0 0 .2em var(--primer-color);
  }
`;


const Button: React.FC<Props> = ({ label, onClick }) => {

    return (
        <StyledButton onClick={ onClick }>
            { label }
        </StyledButton>
    )
}

export default Button;