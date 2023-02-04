import styled from "styled-components";

export const List = styled.ul`
margin-bottom: 50px;
  @media only screen and (min-width: 768px) {
    display: flex;
    gap: 32px;
    flex-wrap: wrap;
  }
  @media only screen and (min-width: 1280px) {
    margin-bottom: 100px;
  }
`;
