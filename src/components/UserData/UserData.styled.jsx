import styled from 'styled-components';
import userPhoto from 'images/UserPage/userPhoto.png';

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

export const AvatarInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 34px;

  @media screen and (min-width: 1280px) {
    position: relative;
  }
`;

export const AvatarImg = styled.img`
  background-image: url(${userPhoto});
  object-fit: cover;
  border-radius: ${p => p.theme.radii.round};
  margin: auto auto 12px;
  width: 233px;
  height: 233px;
  margin-bottom: 12px;
  object-fit: cover;
  filter: drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.11));
  @media screen and (min-width: 768px) {
    margin-bottom: 8px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 0px;
  }
`;

export const LabelEditPhoto = styled.label`
  display: flex;
  justify-content: flex-end;
  line-height: 1.83;
  margin-left: auto;
  cursor: pointer;
  padding-right: 10px;
  font-family: ${p => p.theme.fonts.manrope};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.83;
  align-items: center;
  letter-spacing: 0.04em;
  img ~ &:hover {
    transform: scale(1.1);
  }
  @media screen and (min-width: 1280px) {
    position: absolute;
    bottom: 0;
    right: -60px;
    padding: 0;
  }
`;

export const InputEditPhoto = styled.input`
  display: none;
`;

export const SVG = styled.img`
  margin-right: 4px;
  width: 20px;
  height: 20px;
  transition: 0.2s;
`;

export const UserInfoWrapper = styled.div`
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;
export const UserInfoList = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-bottom: 42px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    width: 100%;
    margin-right: 52px;
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
