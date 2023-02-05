import React from "react";
import { PrimaryHeader } from "./Header.styled";
import Logo from "components/Logo/Logo";
import Nav from "components/Nav/Nav";

const Header = () => {
  return (
    <PrimaryHeader>
      <Logo />
      <Nav />
    </PrimaryHeader>
  );
};

export default Header;
