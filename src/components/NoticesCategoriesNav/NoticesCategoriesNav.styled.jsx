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
  font-weight: 500;
  font-size: 14px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  color: #111111;
  background: #ffffff;
  border: 2px solid #f59256;
  border-radius: 40px;

  @media only screen and (min-width: 768px) {
    padding: 10px 28px;
    font-size: 20px;
  line-height: 1.2;
  }

  &.active {
    color: #FFFFFF;
    background: #F59256;
  }

  &:hover {
    color: #FFFFFF;
    background: #F59256;
  }
`;