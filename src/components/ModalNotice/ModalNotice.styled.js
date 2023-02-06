import styled from "styled-components";
import cross from "../ModalAddsPet/ImgModalAddsPet/clarity_close-cross.png";

export const Overlay = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(17, 17, 17, 0.6);
  backdrop-filter: blur(10px);
`;

export const ModalNoticeAll = styled.div`
  position: absolute;
  overflow: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-height: 90%;
  border-radius: 20px;
  padding: 60px 20px 40px;
  background: ${(p) => p.theme.colors.white};

  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 704px;
    border-radius: 40px;
    padding: 32px 20px;
    height: 548px;
  }
`;

export const ModalNoticeBtnDel = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 34px;
  height: 34px;

  border: none;
  background-color: ${(p) => p.theme.colors.background};
  border-radius: 50%;

  background-color: #fdf7f2;
  background-image: url(${cross});
  background-size: 28px 28px;
  background-repeat: no-repeat;
  background-position: center center;
  :hover,
  :active {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  @media screen and (min-width: 768px) {
    top: 12px;
    width: 44px;
    height: 44px;
    background-size: 32px 32px;
  }
`;

export const ModalNoticeWrapperContent = styled.div`
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const ModalNoticeWrapperImg = styled.div`
  width: 100%;

  position: relative;
  height: 240px;
  overflow: hidden;
  margin-bottom: 16px;

  border-radius: 0px 0px 40px 40px;

  @media screen and (min-width: 768px) {
    width: 288px;
    height: 328px;
    margin-bottom: 0;
    margin-right: 20px;
  }
`;

export const ModalNoticeImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const ModalNoticeCategotyDiv = styled.div`
  position: absolute;
  top: 20px;
  width: 158px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0px 20px 20px 0px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(50px);
  font-weight: ${(p) => p.theme.fontWeights.semibold};
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: 0.04em;
`;

export const ModalNoticeTitle = styled.h3`
  font-size: 24px;
  letter-spacing: -0.01em;
  font-weight: ${(p) => p.theme.fontWeights.bold};
  line-height: 1.375;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    width: 300px;
    font-size: 28px;
    line-height: 1.357;
    margin-bottom: 20px;
  }
`;

export const ModalNoticeList = styled.ul``;

export const ModalNoticeLi = styled.li`
  display: flex;
  justify-content: flex-start;

  :not(:last-child) {
    margin-bottom: ${(p) => p.theme.space[3]}px;
  }
`;

export const ModalNoticeItemParametr = styled.p`
  width: 40%;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.357;

  @media screen and (min-width: 768px) {
    width: 120px;

    font-size: 16px;
    line-height: 1.375;
  }
`;

export const ModalNoticeItemValue = styled.p`
  font-size: 14px;
  line-height: 1.357;

  font-weight: ${(p) => p.theme.fontWeights.semibold};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.375;
  }
`;

export const ModalNoticeCommentsDiv = styled.div`
  margin-bottom: 40px;
  font-size: 14px;
  line-height: 1.357;

  font-weight: ${(p) => p.theme.fontWeights.normal};

  @media screen and (min-width: 768px) {
    margin-bottom: auto;
    font-weight: ${(p) => p.theme.fontWeights.semibold};
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.04em;
  }
`;

export const ModalNoticeCommentsSpan = styled.span`
  font-weight: 600;
`;

export const ModalNoticeButtonsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
  }
`;

export const ModalNoticeButtonsItem = styled.li``;

export const ModalNoticeButton = styled.button`
  width: 100%;
  height: 40px;
  padding: 0;

  background-color: transparent;
  border-radius: 40px;
  border: 2px solid #f59256;
  font-weight: ${(p) => p.theme.fontWeights.semibold};
  font-size: 16px;
  line-height: 1.375;
  letter-spacing: 0.04em;
  color: ${(p) => p.theme.colors.text.primary};
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 160px;
  }
`;

export const ModalNoticeBtnContact = styled(ModalNoticeButton)`
  color: ${(p) => p.theme.colors.white};
  background-color: ${(p) => p.theme.colors.accent};
`;

export const ModalNoticeBtnFavorite = styled(ModalNoticeButton)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalNoticeBtnLink = styled.a`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  color: ${(p) => p.theme.colors.white};
`;

export const HeartSvgSpan = styled.span`
  width: 16px;
  height: 16px;
  margin-left: 8px;
  color: ${(p) => p.theme.colors.accent};
`;
