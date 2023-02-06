import React, { useState } from 'react';

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
    firstGoodHandsForm: {
      title: '',
      name: '',
      date: '',
      breed: '',
    },
    secondGoodHandsForm: {
      sex: '',
      location: '',
      image: null,
      comment: '',
    },
  });


  const [formType, setFormType] = useState('firstGoodHandsForm');

  const handleFirstGoodHandsFormChange = event => {
    setForm({
      ...form,
      firstGoodHandsForm: {
        ...form.firstGoodHandsForm,
        [event.target.name]: event.target.value,
      },
    });
  };

  const handleSecondGoodHandsFormChange = event => {
    if (event.target.name === 'image') {
      setForm({
        ...form,
        secondGoodHandsForm: {
          ...form.secondGoodHandsForm,
          [event.target.name]: URL.createObjectURL(event.target.files[0]),
        }
      });
    } else {
      setForm({
        ...form,
        secondGoodHandsForm: {
          ...form.secondGoodHandsForm,
          [event.target.name]: event.target.value,
         
        },
      });
    }
  };

  const handleGoodHandsRadioChange = event => {
    setForm({
      ...form,
      secondGoodHandsForm: {
        ...form.secondGoodHandsForm,
        sex: event.target.value
         
      }
    });
  };




  const combinedGoodHandsForm = { ...form.firstGoodHandsForm, ...form.secondGoodHandsForm };



  //==================================
  const handleGoodHandsSubmit = async (event) => {
    event.preventDefault();
    dispatch(addPet(combinedGoodHandsForm))
   setForm({
      firstGoodHandsForm: {
        title: '',
        name: '',
        date: '',
        breed: '',
      },
      secondGoodHandsForm: {
         sex: '',
         location: '',
        image: null,
        comment: '',
      },
    });
    handleClose();
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
      {formType === 'firstGoodHandsForm' && (
        <FormContainer onSubmit={handleGoodHandsSubmit}>
          <AddPhoto>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur</AddPhoto>
          <Button type="button" onClick={() => setFormType('secondGoodHandsForm')}>
            lost/found
          </Button>
          <Button type="button" onClick={() => setFormType('secondGoodHandsForm')}>
            in good hands
          </Button>
          <Button type="button" onClick={() => setFormType('secondGoodHandsForm')}>
            sell
          </Button>

          <InputBox>
            <InputLable htmlFor="title">Title of ad <span>*</span></InputLable>
            <InputField
              type="text"
              name="title"
              pattern="/^[a-zA-Z]{2,16}$/"
              value={form.firstGoodHandsForm.title}
              onChange={handleFirstGoodHandsFormChange}
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
              value={form.firstGoodHandsForm.name}
              onChange={handleFirstGoodHandsFormChange}
              placeholder="Name pet"
            />
            {/* {errors.name && <div>{errors.secondForm.name}</div>} */}
          </InputBox>
          <InputBox>
            <InputLable htmlFor="breed">Date of birth</InputLable>
            <InputField
              type="date"
              name="date"
              value={form.firstGoodHandsForm.date}
              onChange={handleFirstGoodHandsFormChange}
            // placeholder="DD/MM/YYYY/"
            />
          </InputBox>
          <InputBox>
            <InputLable htmlFor="breed">Breed</InputLable>
            <InputField
              type="text"
              name="breed"
              pattern="/^[a-zA-Z]{2,16}$/"
              value={form.firstGoodHandsForm.breed}
              onChange={handleFirstGoodHandsFormChange}
              placeholder="Breed"
            />
            {/* {errors.breed && <div>{errors.firstForm.breed}</div>} */}
          </InputBox>
          <ButtonContainer>
            <Button type="button" onClick={closeModalPets}>
              Cancel
            </Button>
            <Button type="button" onClick={() => setFormType('secondGoodHandsForm')} disabled={!hasFirstFormAllData}>
              Next
            </Button>
          </ButtonContainer>
        </FormContainer>
      )}
      {formType === 'secondGoodHandsForm' && (
        <NextFormContainer encType="mutipart/form-data" onSubmit={handleGoodHandsSubmit}>
          <SexButtons>
            <InputContainer>
              
             <InputMaleButton isSelected={selectedRadio === 'Male'}
        onClick={() => handleClick('Male')}>
            <InputRadio
              type="radio"
              name="secondGoodHandsForm.sex"
              value='male'
              checked={form.secondGoodHandsForm.sex === "male"}
              onChange={handleGoodHandsRadioChange}
                />
            </InputMaleButton>
              <LabelMale for="radio1">Male</LabelMale>
            </InputContainer>

            <InputContainer>
            <InputFemaleButton isSelected={selectedRadio === 'Female'}
        onClick={() => handleClick('Female')}>
            <InputRadio
            type="radio"
              name="secondGoodHandsForm.sex"
              value='female'
              checked={form.secondGoodHandsForm.sex === "female"}
              onChange={handleGoodHandsRadioChange}
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
              value={form.secondGoodHandsForm.location}
              onChange={handleSecondGoodHandsFormChange}
              placeholder="Location"
            />
            {/* {errors.breed && <div>{errors.firstForm.breed}</div>} */}
          </InputBox>
          
          <InputLable htmlFor="image">Load the pet's image:</InputLable>
          <DownloadContainer>

            {form.secondGoodHandsForm.image && (
              <Image src={form.secondGoodHandsForm.image} alt="uploaded" />
            )}
            <Download
              name="image"
              type="file"
              accept="image/*"
              onChange={handleSecondGoodHandsFormChange}
            />
          </DownloadContainer>
          <InputBox>
            <CommentsContainer>
              <Comments
                name="comment"
                type="text"
                pattern="^[a-zA-Z0-9,.!?;:-_ ]{8,120}$"
                value={form.secondGoodHandsForm.comment}
                onChange={handleSecondGoodHandsFormChange}
                placeholder="Type comments"
              />
              {/* {errors.comment && <div>{errors.secondForm.comment}</div>} */}
            </CommentsContainer>
          </InputBox>
          <ButtonContainer>
            <Button type="button" onClick={() => setFormType('firstGoodHandsForm')}>
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
