import styled from "styled-components";

export const FriendsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;
  /* height: 192px; */
  padding: 14px 4px 12px;

  background-color: ${(p) => p.theme.colors.white};
  border-radius: 20px;
  box-shadow: ${(p) => p.theme.shadows.card};
  transition: scale 250ms linear;

  :hover {
    scale: 1.05;
  }

  @media screen and (min-width: 768px) {
    width: 336px;
    /* height: 246px; */
    padding-top: ${(p) => p.theme.space[4]}px;
    padding-bottom: ${(p) => p.theme.space[4]}px;

    border-radius: 40px;
  }
  @media screen and (min-width: 1280px) {
    width: 395px;
    /* height: 287px; */
  } ;
`;

export const FriendsLinkTitle = styled.a`
  text-align: center;
  width: 100%;
  margin-bottom: 12px;

  font-weight: ${(p) => p.theme.fontWeights.bold};
  font-size: ${(p) => p.theme.fontSizes.xs};
  line-height: 1.33;
  text-decoration: underline;
  color: ${(p) => p.theme.colors.accent};

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;

    font-size: 16px;
    line-height: 1.375;
  }
  @media screen and (min-width: 1280px) {
    font-size: ${(p) => p.theme.fontSizes.m};
    line-height: 1.35;
  } ;
`;

export const FriendsInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  align-items: flex-start;

  @media screen and (min-width: 768px) {
    gap: 14px;
  }
  @media screen and (min-width: 1280px) {
    gap: 16px;
  } ;
`;

export const FriendsImage = styled.img`
  display: block;
  width: 110px;
  height: auto;

  @media screen and (min-width: 768px) {
    width: 120px;
  }
  @media screen and (min-width: 1280px) {
    width: 158px;
  } ;
`;

export const FriendsInfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;

  /* font-family: ${(p) => p.theme.fonts.monospace}; */
  font-size: ${(p) => p.theme.fontSizes.xs};
  font-weight: ${(p) => p.theme.fontWeights.semibold};
  line-height: 1.33;

  @media screen and (min-width: 768px) {
    gap: 8px;
  }
  @media screen and (min-width: 1280px) {
    gap: 12px;
  } ;
`;

export const FriendsInfoItem = styled.li`
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
  } ;
`;

export const FriendsInfoItemLink = styled.a`
  text-decoration: underline;
  color: ${(p) => p.theme.colors.text.primary};

  :hover {
    color: ${(p) => p.theme.colors.accent};
  }
`;
