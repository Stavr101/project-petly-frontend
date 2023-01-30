import styled from "styled-components";

export const PageTitle = styled.h3`
  margin-bottom: 28px;

  text-align: center;
  font-family: ${(p) => p.theme.fonts.manrope};
  font-size: 24px;
  font-weight: ${(p) => p.theme.fontWeights.bold};
  line-height: 1.375;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;

    font-size: ${(p) => p.theme.fontSizes.xl};
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 60px;
  }
`;
