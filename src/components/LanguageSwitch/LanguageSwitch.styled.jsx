import styled from 'styled-components';

export const LanguageSwitchEl = styled.div`
background: transparent;
padding: 4px;
border-radius: 3px;
width: fit-content;
`;

export const LanguageOption = styled.input`
position: relative;
appearance: none;
cursor: pointer;
border-radius: 50%;
border:  ${p => p.theme.borders.normal}  ${p => p.theme.colors.accent};
padding: 20px 20px;
background: ${p => p.theme.colors.white};
color: ${p => p.theme.colors.black};
font-size: 15px;
transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms;

:first-child {
      margin-right:10px;
    }

&:hover {
font-weight: ${(p) => p.theme.fontWeights.bold};
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
text-shadow: 0px 0px 6px rgba(255, 255, 255, 1);
} 

&:checked {
background: ${p => p.theme.colors.accent};
font-weight: ${(p) => p.theme.fontWeights.bold};
}

&::before {
content: attr(label);
text-align: center;
position: absolute;
transform: translate(-50%, -50%);
}
`