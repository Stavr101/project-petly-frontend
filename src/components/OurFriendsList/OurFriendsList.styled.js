import styled from "styled-components";

export const FriendsList = styled.ul`
  width: 280px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    width: 768px;
    gap: ${(p) => p.theme.space[5]}px;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;
