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
  margin-top: 42px;
  @media screen and (min-width: 768px) {
    font-size: 36px;
    line-height: 49px;
    margin-top: 0;
  }
`;

const rotate = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const FormWrapper = styled.div`
  padding: 20px;
  /* animation: ${rotate} 2s linear forwards; */

  @media screen and (min-width: 768px) {
    width: 608px;
    /* height: 517px; */
    margin: 0 auto;
    padding: 60px 80px 40px 80px;
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
    border-radius: 40px;
    /* margin-top: 170px; */
    background-color: ${(p) => p.theme.colors.white};
  }
  @media screen and (min-width: 1280px) {
    padding: 60px 80px;
    /* margin-top: 57px; */
  }
`;

export const FormWrapperEl = styled.div`
  padding: 20px;
  animation: ${rotate} 0.5s linear forwards;

  @media screen and (min-width: 768px) {
    width: 608px;
    /* height: 517px; */
    margin: 0 auto;
    padding: 60px 80px 40px 80px;
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
    border-radius: 40px;
    /* margin-top: 170px; */
    background-color: ${(p) => p.theme.colors.white};
  }
  @media screen and (min-width: 1280px) {
    padding: 60px 80px;
    /* margin-top: 57px; */
  }
`;

export const FormEl = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const InputField = styled(Field)`
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  padding: 10px;
  & + & {
    margin-top: 16px;
  }
`;

export const ErrorMsg = styled.p`
  color: red;
  margin-bottom: 6px;
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
