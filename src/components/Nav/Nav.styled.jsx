import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import BurgerMenuBtn from "images/icons/BurgerMenuBtn.svg";

export const NavContainer = styled.div`
display: flex;
justify-content: space-between;
`

export const PrimaryNav = styled.nav`
display: flex;
justify-content: space-around;
`
export const NavLink = styled(Link)`
display: flex;
align-items: center;
text-decoration: none;
cursor: pointer;
font-size: ${p => p.theme.fontSizes.m};
font-family: ${p => p.theme.fonts.manrope};
color: ${p => p.theme.colors.text.secondBlack};
letter-spacing: 0.04em;
margin-left: 80px;

&.active {
    color: ${p => p.theme.colors.accent};
  }
`
export const NavMenu = styled.div`
display: flex;
align-items: center;

@media screen and (max-width: 1279px) {
display: none;
}
`
export const AuthMenu = styled.ul`
display: flex;
align-items: center;

@media screen and (max-width: 767px) {
display: none;
}
`
export const MobileMenuBtn = styled.button`
display: flex;
height: 40px;
width: 40px;
align-items: center;
justify-content: center;
background: none;
border: none;
background-image: url(${BurgerMenuBtn});
background-repeat: no-repeat;
background-size: contain;
background-position: center;

@media screen and (min-width: 768px) {
display: flex;
margin-left: 20px;
}

@media screen and (min-width: 1280px) {
display: none;
}
`