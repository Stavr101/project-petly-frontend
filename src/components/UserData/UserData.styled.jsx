import styled from 'styled-components';

export const UserDataWrapper = styled.div`
  /* display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto; */
  background-color: ${props => props.theme.colors.white};
`;

export const UserDataTitle = styled.p`
  color: ${props => props.theme.colors.black};
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
`;
