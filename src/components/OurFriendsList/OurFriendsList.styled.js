import styled from "styled-components";

export const FriendsList = styled.ul`
  padding: 0;
  margin: 0;

  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 1fr;
  grid-gap: 12px;
  justify-items: center;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${(p) => p.theme.space[5]}px;
  }
  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
