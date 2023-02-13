import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const NavBtnLink = styled(Link)`
display: inline-flex;
justify-content: center;
align-items: center;
cursor: pointer;
padding: 11px 28px;
border: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
background-color: ${p => p.theme.colors.accent};
border-radius: 40px;
color: ${p => p.theme.colors.white};
letter-spacing: 0.04em;
font-family: ${p => p.theme.fonts.manrope};
font-size: 16px;
line-height: 1.375;
transition: text-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);


&:hover {
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
text-shadow: 0px 0px 6px rgba(255, 255, 255, 1);
}
`