import React, { useState } from 'react';
import styled, { keyframes } from "styled-components";
import male from "./ImgModalAddNotice/male.png";
import female from "./ImgModalAddNotice/female.png";
import {
  InputBox,
  InputLable,
  InputField,
  ButtonContainer,
  Button,
  Comments,
  FormContainer,
  CommentsContainer,
  AddPhoto,
  Download,
  Image,
  InputRadio,
  DownloadContainer,
  NextFormContainer,
  LabelMale,
  LabelFemale,
  InputContainer,
  InputMaleButton,
  InputFemaleButton,
    SexButtons,
} from './ModalAddNotice.styled';

import * as Yup from 'yup';

// import { AddsPetValidate } from "helpers/validationSchema/addsPetValidate";
// Изменила функцию handleClose на closeModalPets для открытия модалки по нажатию кнопки в PetsData
function Forma({ closeModalPets }) {
  const [selectedRadio, setSelectedRadio] = useState('');
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    firstFoundForm: {
      title: '',
      name: '',
      date: '',
      breed: '',
    },
    secondFoundForm: {
      sex: '',
      location: '',
      image: null,
      comment: '',
    },
  });


  const [formType, setFormType] = useState('firstFoundForm');

  const handleFirstFoundFormChange = event => {
    setForm({
      ...form,
      firstFoundForm: {
        ...form.firstFoundForm,
        [event.target.name]: event.target.value,
      },
    });
  };

  const handleFoundRadioChange = event => {
    setForm({
      ...form,
      secondSFoundForm: {
        ...form.secondFoundForm,
        sex: event.target.value
         
      }
    });
  };


  const handleSecondFoundFormChange = event => {
    if (event.target.name === 'image') {
      setForm({
        ...form,
        secondFoundForm: {
          ...form.secondFoundForm,
          [event.target.name]: URL.createObjectURL(event.target.files[0]),
        }
      });
    } else {
      setForm({
        ...form,
        secondFoundForm: {
          ...form.secondFoundForm,
          [event.target.name]: event.target.value,
         
        },
      });
    }
  };

  const combinedLostFoundForm = { ...form.firstFoundForm, ...form.secondFoundForm };

  const handleFoundSubmit = async event => {
    event.preventDefault();
    console.log(combinedLostFoundForm);
    setForm({
      firstFoundForm: {
        title: '',
        name: '',
        date: '',
        breed: '',
      },
      secondFoundForm: {
         sex: '',
         location: '',
        image: null,
        comment: '',
      },
    });
  };
  
  //+++++++++++++++++++++++++++++++++++++++++++++++++


  const handleClick = button => {
    setSelectedRadio(button);
  }; 
//+++++++++++++++++++++++++++++++++++++++++++++++++++

    const hasFirstFormAllData = Object.values(form.firstForm).every(value => value)
  const hasSecondFormAllData = Object.values(form.secondForm).every(value => value)
// console.log(form.secondForm.sex)
  return (
    <>
      {formType === 'firstFoundForm' && (
        <FormContainer onSubmit={handleFoundSubmit}>
          <AddPhoto>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur</AddPhoto>
          <Button type="button" onClick={() => setFormType('secondFoundForm')}>
            lost/found
          </Button>
          <Button type="button" onClick={() => setFormType('secondFoundForm')}>
            in good hands
          </Button>
          <Button type="button" onClick={() => setFormType('secondFoundForm')}>
            sell
          </Button>

          <InputBox>
            <InputLable htmlFor="title">Title of ad <span>*</span></InputLable>
            <InputField
              type="text"
              name="title"
              pattern="/^[a-zA-Z]{2,16}$/"
              value={form.firstFoundForm.title}
              onChange={handleFirstFoundFormChange}
              placeholder="Type name"
            />
            {/* {errors.name && <div>{errors.secondForm.name}</div>} */}
          </InputBox>
          <InputBox>
            <InputLable htmlFor="name">Name pet</InputLable>
            <InputField
              type="text"
              name="name"
              pattern="/^[a-zA-Z]{2,16}$/"
              value={form.firstFoundForm.name}
              onChange={handleFirstFoundFormChange}
              placeholder="Name pet"
            />
            {/* {errors.name && <div>{errors.secondForm.name}</div>} */}
          </InputBox>
          <InputBox>
            <InputLable htmlFor="breed">Date of birth</InputLable>
            <InputField
              type="date"
              name="date"
              value={form.firstFoundForm.date}
              onChange={handleFirstFoundFormChange}
            // placeholder="DD/MM/YYYY/"
            />
          </InputBox>
          <InputBox>
            <InputLable htmlFor="breed">Breed</InputLable>
            <InputField
              type="text"
              name="breed"
              pattern="/^[a-zA-Z]{2,16}$/"
              value={form.firstFoundForm.breed}
              onChange={handleFirstFoundFormChange}
              placeholder="Breed"
            />
            {/* {errors.breed && <div>{errors.firstForm.breed}</div>} */}
          </InputBox>
          <ButtonContainer>
            <Button type="button" onClick={closeModalPets}>
              Cancel
            </Button>
            <Button type="button" onClick={() => setFormType('secondFoundForm')} disabled={!hasFirstFormAllData}>
              Next
            </Button>
          </ButtonContainer>
        </FormContainer>
      )}
      {formType === 'secondFoundForm' && (
        <NextFormContainer encType="mutipart/form-data" onSubmit={handleFoundSubmit}>
          <SexButtons>
            <InputContainer>
              
             <InputMaleButton isSelected={selectedRadio === 'Male'}
        onClick={() => handleClick('Male')}>
            <InputRadio
              type="radio"
              name="secondFoundForm.sex"
              value='male'
              checked={form.secondFoundForm.sex === "male"}
              onChange={handleFoundRadioChange}
                />
            </InputMaleButton>
              <LabelMale for="radio1">Male</LabelMale>
            </InputContainer>

            <InputContainer>
            <InputFemaleButton isSelected={selectedRadio === 'Female'}
        onClick={() => handleClick('Female')}>
            <InputRadio
            type="radio"
              name="secondFoundForm.sex"
              value='female'
              checked={form.secondFoundForm.sex === "female"}
              onChange={handleFoundRadioChange}
              />         
              </InputFemaleButton>
              <LabelFemale for="radio1">Female</LabelFemale>
            </InputContainer>

          </SexButtons>

          <InputBox>
            <InputLable htmlFor="location">Location<span>*</span>:</InputLable>
            <InputField
              type="text"
              name="location"
              // pattern="/^[a-zA-Z]{2,16}$/"
              value={form.secondFoundForm.location}
              onChange={handleSecondFoundFormChange}
              placeholder="Location"
            />
            {/* {errors.breed && <div>{errors.firstForm.breed}</div>} */}
          </InputBox>
          
          <InputLable htmlFor="image">Load the pet's image:</InputLable>
          <DownloadContainer>

            {form.secondFoundForm.image && (
              <Image src={form.secondFoundForm.image} alt="uploaded" />
            )}
            <Download
              name="image"
              type="file"
              accept="image/*"
              onChange={handleSecondFoundFormChange}
            />
          </DownloadContainer>
          <InputBox>
            <CommentsContainer>
              <Comments
                name="comment"
                type="text"
                pattern="^[a-zA-Z0-9,.!?;:-_ ]{8,120}$"
                value={form.secondFoundForm.comment}
                onChange={handleSecondFoundFormChange}
                placeholder="Type comments"
              />
              {/* {errors.comment && <div>{errors.secondForm.comment}</div>} */}
            </CommentsContainer>
          </InputBox>
          <ButtonContainer>
            <Button type="button" onClick={() => setFormType('firstFoundForm')}>
              Back
            </Button>
            <Button type="submit" disabled={!hasSecondFormAllData}>Done</Button>
          </ButtonContainer>
        </NextFormContainer>
      )}
    </>
  );
}

export default Forma;
