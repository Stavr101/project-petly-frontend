import styled from "styled-components";

import MainImgMob1x from "images/HomePage/main-img-mobile-1x-min.png";
import MainImgTab1x from "images/HomePage/main-img-tablet-1x-min.png";
// import MainImgDesk1x from "images/HomePage/main-img-desktop-1x-min.png";

import MainImgMob2x from "images/HomePage/main-img-mobile-2x-min.png";
import MainImgTab2x from "images/HomePage/main-img-tablet-2x-min.png";
import MainImgDesk2x from "images/HomePage/main-img-desktop-2x-min.png";

import BgColoredMob1x from "images/HomePage/waves-mobile-1x-min.png";
// import BgColoredTab1x from "images/HomePage/waves-tablet-1x-min.png";
// import BgColoredDesk1x from "images/HomePage/waves-desktop-1x-min.png";

import BgColoredMob2x from "images/HomePage/waves-mobile-2x-min.png";
import BgColoredTab2x from "images/HomePage/waves-tablet-2x-min.png";
import BgColoredDesk2x from "images/HomePage/waves-desktop-2x-min.png";

import HeartImg from "images/HomePage/heart-desktop-min.png";

export const MainPage = styled.main`
`

export const MainHeader = styled.h1`
font-family: ${p => p.theme.fonts.manrope};
font-weight: ${p => p.theme.fontWeights.bold};
font-size: 32px;
line-height: 1.38;
min-height: 133px;

@media (min-width: 768px) {
    font-size: 68px;
    line-height: 1.47;
    width: 588px;
}
@media (min-width: 1280px) {
    max-width: 588px;
    padding-top: 34px;
}
`
export const MainImageBlock = styled.div`
background-image: url(${MainImgMob1x});
background-position: bottom;
background-repeat: no-repeat;
background-size: contain;
background-position: bottom, center;
min-height: calc(100vh - 230px);

@media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
    background-image: url(${MainImgMob2x});
}

@media (min-width: 768px) {
    background-image: url(${MainImgTab1x});
    min-height: calc(100vh - 300px);
}

@media (min-width: 768px),
    screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
    background-image: url(${MainImgTab2x});
}

@media (min-width: 1280px) {
    background: none;
}
`
export const SectionHero = styled.section`
max-width: 100vw;
min-height: calc(100vh - 117px);
background-size: cover;
background-position: bottom;
background-repeat: no-repeat;
background-image: url(${BgColoredMob1x});

@media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
    background-image: url(${BgColoredMob2x});
}

@media (min-width: 768px) {
    background-image: url(${BgColoredTab2x});
    background-position: top;
    background-size: 140%; 
}

// @media screen and (min-width: 768px),
//     screen and (min-device-pixel-ratio: 2),
//     screen and (min-resolution: 192dpi),
//     screen and (min-resolution: 2dppx) {
//     background-image: url(${BgColoredTab2x});
//     background-position: top;
//     background-size: 140%; 
// }

@media (min-width: 1280px) {
    background-image: url(${MainImgDesk2x}), url(${HeartImg}), url(${BgColoredDesk2x});
    background-size: contain, 8%, 100% auto; 
    background-position: 100% 100%, top 5% right 40%, bottom;
    min-height: calc(100vh - 130px);
}

// @media screen and (min-width: 1280px),
//     screen and (min-device-pixel-ratio: 2),
//     screen and (min-resolution: 192dpi),
//     screen and (min-resolution: 2dppx) {
//     background-image: url(${MainImgDesk2x}), url(${HeartImg}), url(${BgColoredDesk2x});
//     background-size: contain, 8%, 100% auto; 
//     background-position: 100% 100%, top 5% right 40%, bottom;
//     min-height: calc(100vh - 133px);
// }
`