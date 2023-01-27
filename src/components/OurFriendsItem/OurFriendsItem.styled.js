import styled from "styled-components";

export const OurFriendsListItem = styled.li`
  display: flex;
  align-items: center;
  width: ${(p) => p.theme.space[8]}px;
  color: ${(p) => p.theme.colors.text};
  font-weight: ${(p) => p.theme.fontWeights.semibold};
  font-size: ${(p) => p.theme.fontSizes.s};
  :not(:last-child) {
    margin-bottom: ${(p) => p.theme.space[4]}px;
  }
  ::before {
    content: "";
    display: block;
    margin-right: ${(p) => p.theme.space[3]}px;
    border-radius: 5 ${(p) => p.theme.radii.round};
    width: ${(p) => p.theme.space[2]}px;
    height: ${(p) => p.theme.space[2]}px;
    background-color: ${(p) => p.theme.colors.black};
  }
`;

// export const ContactDeleteButton = styled.button`
// display: inline-flex;
//     align-items:center;
//     justify-content:center;
//     margin-left: auto;
//     font-size: ${p => p.theme.fontSizes.xs};
//     color:  ${p => p.theme.colors.white};
//     padding-top:${p => p.theme.space[2]}px;
//     padding-bottom:${p => p.theme.space[2]}px;
//     background-color: ${p=> p.theme.colors.primary};
//     border:none;
//     border-radius:${p=>p.theme.radii.normal};
//     transition: background-color 250ms ease-in-out;

//     :hover{
//         background-color: ${p=> p.theme.colors.accent};

// }
// `
