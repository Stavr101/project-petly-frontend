import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";

export const Wrap = styled.div`
  @media only screen and (max-width: 767px) {
    position: sticky;
    bottom: 50px;
    float: right;
    min-height: 2em;
  }

  @media only screen and (max-width: 1279px) {
    right: 32px;
  }

  position: absolute;
  top: 192px;
  right: 16px;
  display: flex;
  align-items: center;
`;

export const Text = styled.p`
  @media only screen and (max-width: 767px) {
    display: none;
  }

  margin-right: 12px;
  font-weight: ${(p) => p.theme.fontWeights.semibold};
  font-size: 20px;
  line-height: 1.35;
  color: ${(p) => p.theme.colors.black};
`;

export const Cont = styled.p`
  @media only screen and (max-width: 767px) {
    font-weight: ${(p) => p.theme.fontWeights.semibold};
    font-size: 12px;
    line-height: 1.33;
    color: ${(p) => p.theme.colors.white};
  }

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

export const Button = styled.button`
  width: 44px;
  height: 44px;
  color: ${(p) => p.theme.colors.white};
  background: ${(p) => p.theme.colors.accent};
  border: none;
  border-radius: 50%;
  @media only screen and (max-width: 767px) {
    width: 80px;
    height: 80px;
    box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  }
  &:hover {
    transform: scale(1.1);
  }
`;

export const Icon = styled(AddIcon)`
  @media only screen and (max-width: 767px) {
    margin-bottom: 5px;
    margin-top: 10px;
    transform: scale(1.8);
  }
  vertical-align: -5px;
  transform: scale(1.5);
  transition: scale 250ms linear;
`;
