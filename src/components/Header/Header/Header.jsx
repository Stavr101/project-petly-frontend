import React from 'react';
import { PrimaryHeader } from './Header.styled';

const Header = ({children}) => {
  return (
    <PrimaryHeader>{children}</PrimaryHeader>
  )
}

export default Header;