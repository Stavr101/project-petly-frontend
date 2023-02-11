import styled from "styled-components";

export const ItemNoticesImgDiv = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 288px;
  margin-bottom: 20px;

  @media only screen and (min-width: 768px) and (max-width: 1279px) {
  }
`;

export const ItemNoticesTitle = styled.h2`
  min-height: 76px;
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: -0.01em;
  color: #111111;
  margin-bottom: 20px;
`;

export const ItemNoticesImg = styled.img`
  width: 100%;
  height: 288px;
  object-fit: cover;

  @media only screen and (max-width: 767px) {
    width: 280px;
  }
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

export const ItemNoticesSpan = styled.span`
  position: absolute;
  left: 110px;
`;

export const ItemNoticesLi = styled.li`
  max-width: 280px;
  margin-top: 32px;
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
  display: flex;
  flex-direction: column;
  min-height: 112px;
  gap: 8px;
`;

export const ItemNoticesWrap = styled.div`
  position: relative;
  min-height: 318px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 12px;
  display: flex;
  flex-direction: column;
  /* gap: 20px; */
`;

export const ItemButtonNotices = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  gap: 12px;
`;

export const ItemButtonNoticesLearnMore = styled.button`
  width: 100%;
  padding: 8px 0;
  font-weight: 500;
  color: #f59256;
  font-size: 14px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  background: #ffffff;
  border: 2px solid #f59256;
  border-radius: 40px;

  @media only screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 1.2;
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

export const ItemNoticesListLi = styled.li``;

export const ItemButtonNoticesDelete = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 8px 0;

  color: #f59256;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  background: #ffffff;
  border-radius: 40px;
  border: 2px solid #f59256;

  @media only screen and (min-width: 768px) {
    padding: 8px;
    font-size: 20px;
    line-height: 1.2;
  }

  &.active {
    color: #ffffff;
    background: #f59256;
  }

  &:hover {
    color: #ff6101;
    fill: #ff6101;
    background: #ffffff;
    border: 2px solid #ff6101;
  }
`;

export const ItemNoticesListP = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #111111;
`;
export const ItemButtonNoticesDeleteSpan = styled.span`
  margin-right: 13px;
`;

export const ItemButtonNoticesHeartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
  padding: 8px;
  transition: all 150ms linear 0s;

  :hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;
