import styled from "styled-components";
import MobileImg from "images/AuthPage/mobile-img.png";
import TabletImg from "images/AuthPage/tablet-img.png";
import DesktopImg from "images/AuthPage/desktop-img.png";

export const AuthContainerSection = styled.section`
  background-image: url(${MobileImg});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: contain;
  padding-bottom: 159px;

  @media (min-width: 768px) {
    background-image: url(${TabletImg});
    padding-bottom: 266px;
  }
  @media (min-width: 1280px) {
    background-image: url(${DesktopImg});
    padding-bottom: 143px;
  }
`;
