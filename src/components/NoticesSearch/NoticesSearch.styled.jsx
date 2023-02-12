import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import {DebounceInput} from 'react-debounce-input';

export const Search = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 28px;
  margin-bottom: 28px;

  @media only screen and (min-width: 768px) {
    margin-top: 40px;
    margin-bottom: 40px;
  }
`;

export const SearchForm = styled.div`
  display: flex;
  align-items: center;
  width: 280px;
  height: 40px;
  background-color: ${(p) => p.theme.colors.white};
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 20px;
  overflow: hidden;

  @media only screen and (min-width: 768px) {
    width: 608px;
    height: 44px;
  }
`;

export const FormButton = styled.button`
  width: 50px;
  height: 40px;
  border: 0;
  cursor: pointer;
  outline: none;
  background-color: ${(p) => p.theme.colors.white};
`;

export const IconSearch = styled(SearchIcon)`
transform: scale(1.2);
  transition: scale 250ms linear;
  &:hover {
    transform: scale(1.4);
  }
`;

export const IconClose = styled(HighlightOffIcon)`
transform: scale(1.2);
  transition: scale 250ms linear;
  &:hover {
    transform: scale(1.4);
  }
`;

export const FormInput = styled(DebounceInput)`
  width: 100%;
  font-weight: ${(p) => p.theme.fontWeights.semibold};
  font-size: 16px;
  line-height: 1.37;
  letter-spacing: 0.04em;
  border: none;
  outline: none;
  padding-left: 12px;
  &::placeholder {
    color: #b5b5b5;
    font: inherit;
  }

  @media only screen and (min-width: 768px) {
    padding-left: 20px;
    font-size: 20px;
  }
`;
