import styled from "styled-components";

export const Search = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 28px;
  margin-bottom: 28px;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 280px;
  height: 40px;
  background-color: #fff;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 20px;
  overflow: hidden;
`;

export const FormButton = styled.button`
  width: 40px;
  height: 40px;
  border: 0;
  cursor: pointer;
  outline: none;
  background-color: #fff;
`;

export const FormButtonIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const FormInput = styled.input`
  width: 100%;
  font-weight: 500;
  font-size: 16px;
  border: none;
  outline: none;
  padding-left: 12px;
  &::placeholder {
    color: #535353;
    font: inherit;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.37;
    letter-spacing: 0.04em;
  }
`;
