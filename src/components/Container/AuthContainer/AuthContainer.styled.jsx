import styled from "styled-components";
import MobileImg from "images/AuthPage/mobile-img.png";
import TabletImg from "images/AuthPage/tablet-img.png";
import DesktopImg from "images/AuthPage/desktop-img.png";

export const AuthContainerSection = styled.section`
  min-height: calc(100vh - 96px);
  margin: 0 auto;
  max-width: 1600px;
  background-image: url(${MobileImg});
  background-repeat: no-repeat;
  /* background-position: 0px 100%; */
  background-position: bottom;
  background-size: contain;
  padding-bottom: 159px;

  @media (min-width: 768px) {
    background-image: url(${TabletImg});
    padding-top: 94px;
    padding-bottom: 266px;
    min-height: calc(100vh - 102px);
  }
  @media (min-width: 1280px) {
    background-image: url(${DesktopImg});
    padding-bottom: 143px;
    padding-top: 0px;
    min-height: calc(100vh - 121px);
  }
`;
