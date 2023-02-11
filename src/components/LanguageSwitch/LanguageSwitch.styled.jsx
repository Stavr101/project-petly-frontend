import styled from 'styled-components';

export const LanguageSwitchEl = styled.div`
background: transparent;
padding: 4px;
border-radius: 3px;
width: fit-content;
`;

export const LanguageOption = styled.input`
appearance: none;
cursor: pointer;
border-radius: 50%;
border:  ${p => p.theme.borders.normal}  ${p => p.theme.colors.accent};
padding: 10px 10px;
background: ${p => p.theme.colors.white};
color: ${p => p.theme.colors.black};
font-size: 15px;
transition: all 0.1s;

:first-child {
      margin-right:10px;
    }

&:checked {
background: ${p => p.theme.colors.accent};
}

&::before {
content: attr(label);
text-align: center;
}
`