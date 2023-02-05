import styled from "styled-components";

export const TimeListTable = styled.table`
  padding: 12px;

  font-family: ${(p) => p.theme.fonts.manrope};
  font-size: ${(p) => p.theme.fontSizes.xs};
  font-weight: ${(p) => p.theme.fontWeights.semibold};
  line-height: 1.33;
`;

export const TimeListRow = styled.tr`
  :not(:last-child) {
    margin-bottom: ${(p) => p.theme.space[3]}px;
  }
`;
