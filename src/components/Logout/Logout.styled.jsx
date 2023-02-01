import styled from 'styled-components';

export const LogOutButton = styled.button`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: auto;
  border: none;
  background-color: inherit;
  cursor: pointer;
  font-family: ${p => p.theme.fonts.manrope};
  font-weight: ${p => p.theme.fontWeights.semibold};
  font-size: 16px;
  line-height: 1.37;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.text.gray};
  transition: 0.2s;

  &:hover {
    transform: scale(1.2);
  }

  @media screen and (min-width: 768px) {
    position: absolute;
    left: 32px;
    bottom: 24px;
  }
  @media screen and (min-width: 1280px) {
    position: absolute;
    left: 16px;
    bottom: 24px;
  }
`;

export const SVG = styled.img`
  margin-right: 8px;
  width: 20px;
  height: 20px;
`;
