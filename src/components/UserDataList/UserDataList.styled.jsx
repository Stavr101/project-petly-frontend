import styled from 'styled-components';

export const UserInfoWrapper = styled.div`
  @media screen and (min-width: 768px) {
    width: 100%;
    margin-right: 52px;
  }
  @media screen and (min-width: 1280px) {
    margin-right: 0;
  }
`;
export const UserInfoList = styled.ul`
  position: relative;
  display: block;
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    width: 100%;
  }
  @media screen and (min-width: 1280px) {
    margin-right: 0;
  }
`;

export const UserInfoItem = styled.li`
  display: flex;
  align-items: baseline;
  @media screen and (min-width: 768px) {
    justify-content: space-between;
  }
`;

export const UserInfoTitle = styled.p`
  width: 1px;
  margin-right: 10px;
  margin-bottom: 12px;
  font-family: ${p => p.theme.fonts.manrope};
  font-weight: ${p => p.theme.fontWeights.semibold};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.33;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.s};
    line-height: 1.38;
  }
`;
