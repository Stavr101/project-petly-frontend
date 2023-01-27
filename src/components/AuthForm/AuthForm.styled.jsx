import styled from "styled-components";
import { Form, Field } from "formik";

export const FormTitle = styled.h1`
  font-family: inherit;
  text-align: center;
  margin-bottom: 40px;
  font-size: 24px;
  line-height: 33px;

  letter-spacing: 0.04em;
`;

export const FormWrapper = styled.div`
  padding: 20px;
  /* background: radial-gradient(
    166.91% 140.22% at 27.27% 7.97%,
    #febb40 0%,
    #ec4c76 55.76%,
    #d60b52 97.26%
  ); */
  /* transform: matrix(-1, 0, 0, 1, 0, 0); */
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
  margin: 5px;
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
