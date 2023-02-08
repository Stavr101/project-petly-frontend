import styled, { keyframes } from "styled-components";
import cross from "./ImgModalAddNotice/clarity_close-cross.png";
import crossPhoto from "./ImgModalAddNotice/CrossForPhoto.png";
import male from "./ImgModalAddNotice/male.png";
import female from "./ImgModalAddNotice/female.png";


const slideIn = keyframes`
  from {
    /* transform: translateX(100%); */
    opacity: 0;
  }
  to {
  
    /* transform: translateY(0); */
    opacity: 1;
  }
`;

export const InputMaleButton = styled.button`
background-image: url(${male});
width: 60px;
height:120px;
margin-bottom: 20px;
background-repeat:no-repeat;
border: none;
background-color: white;
cursor: pointer;
   color:  ${props => (props.isSelected ? '#F59256' : 'black')};
 
 :hover {
 
 color:  ${props => (props.isSelected ? '#F59256' : 'black')};
}
`
export const InputFemaleButton = styled.button`
background-image: url(${female});
width: 60px;
height:120px;
margin-bottom: 20px;
background-repeat:no-repeat;
border: none;
background-color: white;
      color:  ${props => (props.isSelected ? '#F59256' : 'black')};
 
 :hover {
 
 color:  ${props => (props.isSelected ? '#F59256' : 'black')};

  }`

export const InputContainer = styled.div`
width: 60px;
margin-right: 80px;
:hover{
    color: #F59256;;
}
`
export const InputRadio = styled.input`
width: 50px;
height: 50px;
opacity: 0;
`;

export const InputFemale = styled.input`
width: 50px;
height: 50px;
opacity: 0;
`;

export const LabelMale = styled.label`
font-size: 18px;

`;
export const LabelFemale = styled.label`
font-size: 18px;
`;

export const SexButtons = styled.div`
display: flex;
margin-right: auto;
`;

const slideInPhoto = keyframes`
  from {
    /* transform: translateX(-50%); */
    opacity: 0;
  }
  to {
  
    /* transform: translateX(0); */
    opacity: 1;
  }
`;




export const AddPhoto = styled.p`
font-size: 16px;
  text-align: center;
  margin-bottom: 20px;
  
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #111111;
        @media (min-width: 768px) {
    width: 394px;
font-size: 20px;
  }
`;

export const DownloadPhoto = styled.input`
  & + label {
    /* стилі для кнопки */
    display: inline-block;
    padding: 0.5rem 1rem;
    color: white;
    background-color: blue;
    border-radius: 4px;
    cursor: pointer;
  }`

export const Download = styled.input`
opacity: 0;
width: 182px;
height: 182px;
`
export const DownloadContainer = styled.div`

width: 208px;
height: 208px;
border-radius: 20px;
cursor: pointer;
 margin-bottom: 20px;
  padding: 0;
 
  border: #fdf7f2;
  outline: none;
  background: #fdf7f2;
  color: rgba(27, 27, 27, 0.6);

background-image: url(${crossPhoto});
  background-size: 48px 48px;
  background-repeat: no-repeat;
  background-position: center center;
    @media (min-width: 768px) {
    width: 182px;
height: 182px;
  }
  :hover, :active
   {
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`
export const Image = styled.img`
margin-bottom: -166px;
width: 208px;
height: 208px;
border-radius: 20px;
animation: ${slideInPhoto} 300ms ease-out;
 @media (min-width: 768px) {
    width: 182px;
height: 182px;
  }
`

export const ModalContainer = styled.div`

/* margin-top:10px; */
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  /* margin-left: auto;
  margin-right: auto;
  max-width: 280px; */
  border-radius: 16px;
  animation: ${slideIn} 300ms ease-out;
  overflow-y: auto;

  ::-webkit-scrollbar {
    border-radius: 16px;
  width: 10px;
  background-color: #F5F5F5;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  border-radius: 16px;
  background-color:#f59256;
}

  @media (min-width: 768px) {
    width: 608px;
  /* margin-top:60px; */
  }
`;

export const ModalTitle = styled.h2`
  margin-top: -16px;
  margin-bottom: 20px;
`;

export const FormContainer = styled.form`
  width: 240px;
  height: 540px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (min-width: 768px) {
    max-width: 548px;
    height: 440px;
  }
`;
export const NextFormContainer = styled.form`
  width: 240px;
  height: 440px;
  display: flex;
  flex-direction: column;
  align-items: center;
 
  @media (min-width: 768px) {
    max-width: 448px;
  }
`
export const CommentsContainer = styled.div`
/* width: 240px; */
  /* 
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    max-width: 448px;
  } */
`


export const InputBox = styled.div`

`;

export const InputLable = styled.label`
  /* font-family: "Manrope";
  font-style: normal; */
  color: #111111;
  font-weight: 500;
  font-size: 18px;
  line-height: 36px;
`;

export const InputField = styled.input`
  margin-bottom: 20px;
  padding: 11px 14px;
  width: 240px;
  height: 40px;
  border-radius: 20px;
  outline: none;
  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  color: rgba(27, 27, 27, 0.6);

  @media (min-width: 768px) {
    width: 448px;
    height: 48px;
    font-size: 16px;
    line-height: 26px;
  }

  ::placeholder {
    font-family: "Manrope";
    font-weight: 400;
    font-size: 14px;
    color: rgba(27, 27, 27, 0.6);
  }

  :hover,
  :active,
  :focus {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;

export const Comments = styled.textarea`
  margin-bottom: 20px;
  padding: 11px 14px;
  width: 240px;
  height: 116px;
  border-radius: 20px;
  outline: none;
  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  color: rgba(27, 27, 27, 0.6);

  @media (min-width: 768px) {
    width: 448px;
    height: 116px;
    font-size: 16px;
    line-height: 26px;
  }

  ::placeholder {
    font-family: "Manrope";
    font-weight: 400;
    font-size: 14px;
    color: rgba(27, 27, 27, 0.6);
  }

  :hover,
  :active,
  :focus {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;

export const ButtonContainer = styled.div`
  /* display: flex; */
  margin-top: 40px;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
  @media (min-width: 768px) {
     display: flex;
    width: 380px;
  }
`;

export const ButtonOff = styled.button`
  border-radius: 50%;
  border: none;
  width: 34px;
  height: 34px;
  margin-left: auto;
  background-color: #fdf7f2;
 background-image: url(${cross});
  background-size: 28px 28px;
  background-repeat: no-repeat;
  background-position: center center;
  :hover, :active
   {
    background-size: 30px 30px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;

export const CancelButton = styled.button`
  width: 240px;
  height: 40px;
  border-radius: 20px;
  margin-right: 10px;
  margin-bottom: 20px;
  border: 2px solid #f59256;
  background-color: white;
  :hover,:active {
    background-color: #f59256;
    color: white;
    outline: none;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  @media (min-width: 768px) {
    margin-right: 0;
    width: 180px;
    height: 48px;
  }
`;

export const Button = styled.button`
padding: 10px 28px;
  width: 240px;
  height: 40px;
  border-radius: 20px;
  margin-right: 10px;
  margin-bottom: 12px;
  border: 2px solid #f59256;
  background-color: white;
  :hover, :active {
    background-color: #f59256;
    color: white;
    outline: none;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  @media (min-width: 768px) {
    width: 180px;
    margin-right: 20px;
    height: 48px;
  }
`;

export const NextButton = styled.button`
  width: 240px;
  height: 40px;
  border-radius: 20px;
  margin-right: 10px;
  margin-bottom: 12px;
  border: 2px solid #f59256;
  background-color: white;
  :hover, :active {
    background-color: #f59256;
    color: white;
    outline: none;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  @media (min-width: 768px) {
    width: 180px;
    margin-right: 20px;
    height: 48px;
  }
`;
export const EnterButton = styled.button`
  /* margin-top: 100px; */
  width: 240px;
  height: 40px;
  border-radius: 20px;
  margin-right: 10px;
  border: 2px solid #f59256;
  background-color: white;
  :hover,
  :active {
    background-color: #f59256;
    color: white;
    outline: none;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;
