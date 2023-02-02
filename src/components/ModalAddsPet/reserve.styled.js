import styled, { keyframes } from "styled-components";
import cross from "./ImgModalAddsPet/clarity_close-cross.png";
import { Field }  from "formik";
// import { Form } from "react-router-dom";

const slideIn = keyframes`
  from {
 transform: translateX(-50%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const AddPhoto = styled.p`
  font-family: "Inter";
  font-style: normal;
  margin-bottom: 20px;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #111111;
`;

export const DownloadPhoto = styled(Field)`
  & + label {
    /* стилі для кнопки */
    display: inline-block;
    padding: 0.5rem 1rem;
    color: white;
    background-color: blue;
    border-radius: 4px;
    cursor: pointer;
  }

  /* width: 182px;
height: 182px;
cursor: pointer;
 margin-bottom: 20px;
  padding: 11px 14px;
  border-radius: 20px;
  outline: none;
  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  color: rgba(27, 27, 27, 0.6); */
`;

export const ModalContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  margin-left: auto;
  margin-right: auto;
  max-width: 280px;
  /* height: 530px; */
  border-radius: 16px;
  animation: ${slideIn} 600ms ease-out;

  @media (min-width: 768px) {
    max-width: 608px;
  }
`;

export const ModalTitle = styled.h2`
  margin-top: -16px;
  margin-bottom: 20px;
`;

export const FormContainer = styled.form`
  width: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    max-width: 448px;
  }
`;

export const InputBox = styled.div``;

export const InputLable = styled.label`
  /* font-family: "Manrope";
  font-style: normal; */
  color: #111111;
  font-weight: 500;
  font-size: 18px;
  line-height: 36px;
`;

export const InputField = styled(Field)`
  margin-bottom: 20px;
  padding: 11px 14px;
  width: 240px;
  height: 40px;
  border-radius: 20px;
  outline: none;
  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  color: rgba(27, 27, 27, 0.6);

  @media (min-width: 768px) {
    width: 448px;
    height: 48px;
    font-size: 16px;
    line-height: 26px;
  }

  ::placeholder {
    font-family: "Manrope";
    font-weight: 400;
    font-size: 14px;
    color: rgba(27, 27, 27, 0.6);
  }

  :hover,
  :active,
  :focus {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;

export const Comments = styled.textarea`
  margin-bottom: 20px;
  padding: 11px 14px;
  width: 240px;
  height: 40px;
  border-radius: 20px;
  outline: none;
  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  color: rgba(27, 27, 27, 0.6);

  @media (min-width: 768px) {
    width: 448px;
    height: 48px;
    font-size: 16px;
    line-height: 26px;
  }

  ::placeholder {
    font-family: "Manrope";
    font-weight: 400;
    font-size: 14px;
    color: rgba(27, 27, 27, 0.6);
  }

  :hover,
  :active,
  :focus {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 40px;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
  @media (min-width: 768px) {
    width: 380px;
  }
`;

export const ButtonOff = styled.button`
  border-radius: 50%;
  border: none;
  width: 34px;
  height: 34px;
  margin-left: auto;
  background-color: #fdf7f2;
  background-image: url(${cross});
  background-size: 28px 28px;
  background-repeat: no-repeat;
  background-position: center center;
  :hover, :active
   {
    background-size: 30px 30px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;

export const CancelButton = styled.button`
  width: 240px;
  height: 40px;
  border-radius: 20px;
  margin-right: 10px;
  margin-bottom: 20px;
  border: 2px solid #f59256;
  background-color: white;
  :hover,:active {
    background-color: #f59256;
    color: white;
    outline: none;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  @media (min-width: 768px) {
    margin-right: 0;
    width: 180px;
    height: 48px;
  }
`;

export const Button = styled.button`
  width: 240px;
  height: 40px;
  border-radius: 20px;
  margin-right: 10px;
  margin-bottom: 12px;
  border: 2px solid #f59256;
  background-color: white;
  :hover, :active {
    background-color: #f59256;
    color: white;
    outline: none;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  @media (min-width: 768px) {
    width: 180px;
    margin-right: 20px;
    height: 48px;
  }
`;

export const NextButton = styled.button`
  width: 240px;
  height: 40px;
  border-radius: 20px;
  margin-right: 10px;
  margin-bottom: 12px;
  border: 2px solid #f59256;
  background-color: white;
  :hover, :active {
    background-color: #f59256;
    color: white;
    outline: none;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  @media (min-width: 768px) {
    width: 180px;
    margin-right: 20px;
    height: 48px;
  }
`;
export const EnterButton = styled.button`
  margin-top: 100px;
  width: 240px;
  height: 40px;
  border-radius: 20px;
  margin-right: 10px;
  border: 2px solid #f59256;
  background-color: white;
  :hover,
  :active {
    background-color: #f59256;
    color: white;
    outline: none;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;
