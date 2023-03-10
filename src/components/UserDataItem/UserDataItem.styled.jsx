import styled from 'styled-components';
import pencil from 'images/UserPage/pencil.svg';
import pencilDeactive from 'images/UserPage/pencilDeactive.svg';
import btnOk from 'images/UserPage/btnOk.svg';

export const InputWrapper = styled.form`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const Input = styled.input`
  overflow: visible;
  float: left;
  width: 68%;
  display: flex;
  align-items: center;
  margin-right: 10px;
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
  text-indent: 10px;

  &:disabled {
    border: ${p => p.theme.borders.none};
    background-color: inherit;
    /* & ~ button {
      background-image: url(${pencil});
    } */
  }
  @media screen and (min-width: 768px) {
    width: 60%;
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

export const PensileBtn = styled(UpdateBtn)`
  background-image: url(${pencil});
`;

export const DeactiveBtn = styled(UpdateBtn)`
  background-image: url(${pencilDeactive});
`;
