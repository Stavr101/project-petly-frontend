import styled from "styled-components";

export const ItemNoticesImgDiv = styled.div`
  position: relative;
`;

export const ItemNoticesTitle = styled.h2`
  margin: 20px 0px 0px 20px;
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: -0.01em;
  color: #111111;
`;

export const ItemNoticesImg = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
`;
export const ItemPositionNoticesDiv = styled.div`
  position: absolute;
  width: 100%;
  top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ItemPositionNoticesDivParagraf = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  padding: 6px 50px 7px 20px;
  line-height: 15px;
  color: #111111;

  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);

  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
`;
/* export const ItemNoticesP = styled.p`
font-weight: 500;
font-size: 16px;
line-height: 22px;
display: flex;
align-items: center;
text-align: center;
color: #111111;
` */

export const ItemNoticesSpan = styled.span``;

export const ItemNoticesLi = styled.li`
  max-width: 280px;
  height: 580px;
  margin-top: 32px;
  margin-left: auto;
  margin-right: auto;
  background: #ffffff;

  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 0px 0px 20px 20px;

  @media only screen and (min-width: 768px) {
    min-width: 336px;
    margin-top: 0;
  }

  @media only screen and (min-width: 1280px) {
    min-width: 288px;
  }
`;
export const ItemNoticesUlList = styled.ul`
  margin-top: 20px;
  padding: 0px 20px 0px 20px;
`;

export const ItemNoticesWrap = styled.div`
position: relative;
height: 318px;
`;

export const ItemButtonNotices = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 16px 12px 16px;
`;

export const ItemButtonNoticesLearnMore = styled.button`
    position: absolute;
    bottom: 40px;
    left: 20px;
    right: 20px;
  padding: 8px 28px;
  font-weight: 500;
  color: #f59256;
  font-size: 14px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  background: #ffffff;
  border: 2px solid #f59256;
  border-radius: 40px;

  @media only screen and (min-width: 768px) {
    bottom: 80px;
    padding: 10px 28px;
    font-size: 20px;
    line-height: 1.2;
  }

  @media only screen and (min-width: 1279px) {
    bottom: 40px;
  }

  &.active {
    color: #ffffff;
    background: #f59256;
  }

  &:hover {
    color: #ff6101;
    background: #ffffff;
    border: 2px solid #ff6101;
  }
`;

export const ItemNoticesListLi = styled.li`
  margin-top: 8px;
`;

export const ItemButtonNoticesDelete = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ff6101;
  padding: 8px 28px;
  margin-top: 12px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  background: #ffffff;
  border-radius: 40px;
  border: 2px solid #ff6101;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media only screen and (min-width: 768px) {
    padding: 10px 28px;
    font-size: 20px;
    line-height: 1.2;
  }

  &.active {
    color: #ffffff;
    background: #f59256;
  }

  &:hover {
    color: #ffffff;
    background: #f59256;
  }
`;
export const ItemNoticesListP = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #111111;
`;
export const ItemButtonNoticesDeleteSpan = styled.span`
  margin-right: 13px;
`;

export const ItemButtonNoticesHeartSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
  padding: 8px;
`;
