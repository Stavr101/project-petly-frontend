import styled from "styled-components";

export const Overlay = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
width: 100vw;
left: 0;
top: 100px;
position: fixed;
z-index: 1000;
justify-content: flex-start;
align-items: center;
background-color: ${p => p.theme.colors.background};

`
export const ModalWindow = styled.div`
// position: absolute;
// top: 50%;
// left: 50%;
// transform: translate(-50%, -50%);
// owerflow: auto;
// Width: 95%;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

background-color: ${p => p.theme.colors.background};
`