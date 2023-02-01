import styled from 'styled-components';
import deleteUserPet from 'images/UserPage/deleteUserPet.svg';

export const PetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-bottom: 20px;
  background-color: ${p => p.theme.colors.white};
  border-radius: 20px;
  box-shadow: ${p => p.theme.shadows.modal};
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    margin-bottom: 22px;
  }
`;

export const PetAvatar = styled.img`
  object-fit: cover;
  width: 240px;
  height: 240px;
  margin-bottom: 16px;
  border-radius: 20px;
  @media screen and (min-width: 768px) {
    margin-right: 32px;
    margin-bottom: 0;
    width: 160px;
    height: 160px;
    border-radius: 40px;
  }
`;
export const DescriptionPet = styled.div`
  position: relative;
`;

export const PetDescriptionInfo = styled.p`
  margin-bottom: 12px;
  font-family: ${p => p.theme.fonts.manrope};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: 14px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.37;
  }
`;

export const PetTitleInfo = styled.span`
  font-weight: ${p => p.theme.fontWeights.semibold};
`;

export const DeleteBtn = styled.button`
  position: absolute;
  top: 0;
  right: 20px;
  cursor: pointer;
  background-image: url(${deleteUserPet});
  background-color: inherit;
  border: none;
  width: 20px;
  height: 20px;
  transition: 0.2s;

  &:hover {
    transform: scale(1.2);
  }
  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
    background-color: ${p => p.theme.colors.background};
    border-radius: ${p => p.theme.radii.round};
    background-repeat: no-repeat;
    background-position: center;
    background-size: 24px;
    object-fit: cover;
  }
`;
