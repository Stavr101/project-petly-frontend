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
  right: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
