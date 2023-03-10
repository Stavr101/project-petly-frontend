import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const AuthNavItem = styled.li`
&:first-child {
    margin-right: 20px;
}
`
export const NavBtnLink = styled(Link)`
display: inline-block;
cursor: pointer;
padding: 8px 28px;
border: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
background-color: ${p => p.theme.colors.white};
border-radius: 40px;
color: ${p => p.theme.colors.black};
letter-spacing: 0.04em;
font-family: ${p => p.theme.fonts.manrope};
font-size: 14px;
line-height: 1.35;
transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1), background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms;

@media (min-width: 768px) {
padding: 8.5px 28px;
font-size: ${p => p.theme.fontSizes.m};
}

@media (min-width: 1280px) {
padding: 10px 28px;
}

&:hover {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

&.active {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
}
`