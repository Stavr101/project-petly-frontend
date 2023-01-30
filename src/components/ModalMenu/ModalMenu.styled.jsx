import styled from "styled-components";

export const Overlay = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
left: 0;
top: 100px;
position: fixed;
width: 100vw;
z-index: 100;
`
export const ModalWindow = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
owerflow: auto;

`