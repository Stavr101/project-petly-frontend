import styled from 'styled-components';

export const AuthNavItem = styled.li`
&:first-child {
    margin-right: 20px;
}
`

export const AuthBtn = styled.a`
display: inline-block;
cursor: pointer;
padding: 10px 28px;
border: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
background-color: ${p => p.theme.colors.white};
border-radius: 40px;
color: ${p => p.theme.colors.black};
letter-spacing: 0.04em;
font-family: ${p => p.theme.fonts.manrope};
font-size: ${p => p.theme.fontSizes.m};
line-height: 1.35;
`