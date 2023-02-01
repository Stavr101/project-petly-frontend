import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 30px;

  @media only screen and (min-width: 768px) {
    margin-bottom: 57px;
  }

  @media only screen and (min-width: 1280px) {
    margin-bottom: 60px;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 28px;
  font-weight: ${(p) => p.theme.fontWeights.semibold};
  font-size: 14px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.black};
  background: ${p => p.theme.colors.white};
  border: 2px solid ${p => p.theme.colors.accent};
  border-radius: 40px;
  transition: scale 250ms linear;

  @media only screen and (min-width: 768px) {
    padding: 10px 28px;
    font-size: 20px;
  line-height: 1.2;
  }

  &.active {
    color: ${p => p.theme.colors.white};
    background: ${p => p.theme.colors.accent};
  }

  &:hover {
    color: ${p => p.theme.colors.white};
    background: ${p => p.theme.colors.accent};
  }
`;