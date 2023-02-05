import React, { useState } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${props => (props.isSelected ? 'blue' : 'white')};
  color: ${props => (props.isSelected ? 'white' : 'black')};
  padding: 10px 20px;
  border: 1px solid black;
  border-radius: 5px;
  outline: none;

  &:hover {
    cursor: pointer;
    background-color: blue;
    color: white;
  }
`;

const ButtonContainer = () => {
  const [selectedButton, setSelectedButton] = useState('');

  const handleClick = button => {
    setSelectedButton(button);
  };

  return (
    <div>
      <StyledButton
        isSelected={selectedButton === 'Button 1'}
        onClick={() => handleClick('Button 1')}
      >
        Button 1
      </StyledButton>
      <StyledButton
        isSelected={selectedButton === 'Button 2'}
        onClick={() => handleClick('Button 2')}
      >
        Button 2
      </StyledButton>
    </div>
  );
};

export default ButtonContainer;