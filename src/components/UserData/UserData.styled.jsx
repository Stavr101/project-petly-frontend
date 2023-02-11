import styled from 'styled-components';

export const UserWrapper = styled.div``;

export const UserDataTitle = styled.h2`
  font-family: ${p => p.theme.fonts.manrope};

  color: ${p => p.theme.colors.black};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.semibold};
  line-height: 1.35;
  margin-bottom: 20px;
  margin-left: 20px;
  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    margin-left: 32px;
    font-size: 28px;
    line-height: 1.35;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 24px;
  }
`;

export const UserDataWrapper = styled.div`
  margin-bottom: 40px;
  margin-right: 20px;
  margin-left: 20px;
  padding: 20px 12px 20px 16px;
  background-color: ${p => p.theme.colors.white};
  border-radius: 20px;
  box-shadow: ${p => p.theme.shadows.modal};
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: flex-start;
    margin-left: 0;
    margin-right: 32px;
    padding: 40px 40px 0 32px;
    position: relative;
    border-radius: 0;
    border-top-right-radius: 40px;
    border-bottom-right-radius: 40px;
  }
  @media screen and (min-width: 1280px) {
    align-items: center;
    flex-direction: column;
    padding: 20px 16px 64px 16px;
    width: 410px;
  }
`;
