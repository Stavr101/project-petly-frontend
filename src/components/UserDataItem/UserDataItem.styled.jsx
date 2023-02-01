import styled from 'styled-components';
import pencil from 'images/UserPage/pencil.svg';
import btnOk from 'images/UserPage/btnOk.svg';

export const InputWrapper = styled.div`
  position: absolute;
  right: 12px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 12px;
  @media screen and (min-width: 768px) {
    justify-content: flex-start;
    margin-bottom: 8px;
  }
`;

export const Input = styled.input`
  display: flex;
  align-items: center;
  margin-right: 10px;
  width: 100%;
  height: 24px;
  font-family: ${p => p.theme.fonts.manrope};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.xs};
  color: ${p => p.theme.colors.black};
  line-height: 1.33;
  letter-spacing: 0.04em;
  background: ${p => p.theme.colors.background};
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;

  &:disabled {
    border: ${p => p.theme.borders.none};
    background-color: inherit;
    & ~ button {
      background-image: url(${pencil});
    }
  }
  @media screen and (min-width: 768px) {
    width: 50%;
    height: 32px;
    margin-right: 24px;
    font-size: ${p => p.theme.fontSizes.s};
    line-height: 1.38;
  }
`;

export const UpdateBtn = styled.button`
  cursor: pointer;
  background-image: url(${btnOk});
  background-repeat: no-repeat;
  background-position: center;

  background-color: ${p => p.theme.colors.background};
  border-radius: ${p => p.theme.radii.round};
  border: ${p => p.theme.borders.none};
  width: 20px;
  height: 20px;
  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
    background-size: 16px;
  }
`;
