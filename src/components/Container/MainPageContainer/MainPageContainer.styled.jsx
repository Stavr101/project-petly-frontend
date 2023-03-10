import styled from "styled-components";

export const MainPageContainerBlock = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 100%;

  padding: 0 20px;

  @media (min-width: 480px) {
    width: 480px;
  }

  @media (min-width: 768px) {
    width: 768px;
    padding: 0 32px;
  }

  @media (min-width: 1280px) {
    width: 1280px;
    padding: 0 16px 16px;
  }
`;
