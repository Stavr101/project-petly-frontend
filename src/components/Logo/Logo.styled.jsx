import styled from "styled-components";

export const LogoBlack = styled.span`
display: inline-block;
font-family: ${p => p.theme.fonts.logo};
font-weight: ${p => p.theme.fontWeights.bold};
color: ${p => p.theme.colors.black};
letter-spacing: 0.07em;
line-height: 1.5;
font-size: 28px;

@media (min-width: 768px) {
    font-size: 32px;
}
`
export const LogoAccent = styled(LogoBlack)`
color: ${p => p.theme.colors.accent};

@media (min-width: 768px) {
    font-size: 32px;
}
`
export const LogoLink = styled.a`
`
