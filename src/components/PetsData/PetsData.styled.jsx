import styled from 'styled-components';
import plus from 'images/UserPage/plus.svg';

export const PetsWrapper = styled.div`
  margin-right: 20px;
  margin-left: 20px;
  @media screen and (min-width: 768px) {
    margin-right: 32px;
    margin-left: 32px;
  }
  @media screen and (min-width: 1280px) {
    width: 100%;
    margin-right: 16px;
    margin-left: 0;
  }
`;

export const PetsTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 24px;
`;

export const UserPetsTitle = styled.h2`
  font-family: ${p => p.theme.fonts.manrope};

  color: ${p => p.theme.colors.black};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.semibold};
  line-height: 1.35;

  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const PetBtnWrapper = styled.div`
  position: absolute;
  right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 768px) {
    right: 32px;
  }
`;
export const AddPetTitleBtn = styled.h3`
  margin-right: 15px;
  font-family: ${p => p.theme.fonts.manrope};
  color: ${p => p.theme.colors.black};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.semibold};
  line-height: 1.35;
`;

export const AddPetBtn = styled.button`
  cursor: pointer;
  background-image: url(${plus});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 24px 24px;
  background-color: ${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.round};
  border: ${p => p.theme.borders.none};
  width: 40px;
  height: 40px;

  transition: 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const NonPetWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-bottom: 20px;
  background-color: ${p => p.theme.colors.white};
  border-radius: 20px;
  font-size: ${p => p.theme.fontSizes.m};
  box-shadow: ${p => p.theme.shadows.modal};
  @media screen and (min-width: 768px) {
    position: relative;
    flex-direction: row;
    align-items: flex-start;
    margin-bottom: 22px;
  }
  @media screen and (min-width: 1280px) {
  }
`;
