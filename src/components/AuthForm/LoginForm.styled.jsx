import styled, { keyframes } from "styled-components";
import { Form, Field } from "formik";
import { Link } from "react-router-dom";

export const FormTitle = styled.h1`
  font-family: inherit;
  text-align: center;
  margin-bottom: 40px;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: 0.04em;
  /* margin-top: 42px; */
  @media screen and (min-width: 768px) {
    font-size: 36px;
    line-height: 49px;
    margin-top: 0;
  }
`;

const scale = keyframes`
  0% {
    scale: 0;
  }
  100% {
    scale: 1;
}
`;

export const FormWrapper = styled.div`
  animation: ${scale} 0.4s linear forwards;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  width: 280px;

  @media screen and (min-width: 768px) {
    width: 608px;
    /* height: 517px; */
    margin: 0 auto;
    padding: 60px 80px 40px 80px;
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
    border-radius: 40px;
    background-color: ${(p) => p.theme.colors.white};
    /* margin-top: 170px; */
  }
  @media screen and (min-width: 1280px) {
    padding: 60px 80px;
    /* margin-top: 35px; */
  }
`;

export const FormEl = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const InputField = styled(Field)`
  width: 100%;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  padding: 10px;
`;

export const ErrorMsg = styled.p`
  position: absolute;
  color: red;
  margin-left: 10px;
  font-size: 9px;
`;

export const BtnForm = styled.button`
  cursor: pointer;
  margin-top: 40px;
  border-radius: 40px;
  border: none;
  padding: 10px 28px;
  color: ${(p) => p.theme.colors.white};
  background-color: ${(p) => p.theme.colors.accent};
`;

export const Text = styled.p`
  font-family: inherit;
  margin-top: 40px;
  text-align: center;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.04em;
  color: ${(p) => p.theme.colors.text.gray};
`;

export const LinkAuth = styled(Link)`
  text-decoration: underline;
  color: #3091eb;
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  & + & {
    margin-top: 16px;
  }
`;

export const EyePassword = styled.button`
  position: absolute;
  top: 25%;
  right: 5px;
  background-color: transparent;
  border: none;
  color: rgba(27, 27, 27, 0.6);
`;
