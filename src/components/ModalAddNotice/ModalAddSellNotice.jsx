import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addPet } from 'redux/pets/operations';

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

// import { AddsPetValidate } from "helpers/validationSchema/addsPetValidate";
// Изменила функцию handleClose на closeModalPets для открытия модалки по нажатию кнопки в PetsData


function Forma({ handleClose }) {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [selectedRadio, setSelectedRadio] = useState('');
  
  const [form, setForm] = useState({
    firstForm: {
      title: '',
      name: '',
      date: '',
      breed: '',
    },
    secondForm: {
      sex: '',
      location: '',
      price: '',
      avatarUrl: null,
      comment: '',
    },
  });
  

  const [formType, setFormType] = useState('firstForm');
 
  const handleFirstFormChange = (event) => {
    setForm({
      ...form,
      firstForm: {
        ...form.firstForm,
        [event.target.name]: event.target.value,
      },
    });
  };
  const handleSecondFormChange = event => {
    if (event.target.name === 'avatarUrl') {
      setForm({
        ...form,
        secondForm: {
          ...form.secondForm,
          [event.target.name]: URL.createObjectURL(event.target.files[0]),
        }
      });
    } else {
      setForm({
        ...form,
        secondForm: {
          ...form.secondForm,
          [event.target.name]: event.target.value,

        },
      });
    }
  };
  const handleRadioChange = event => {
    setForm({
      ...form,
      secondForm: {
        ...form.secondForm,
        sex: event.target.value

      }
    });
  };

  const combinedForm = { ...form.firstForm, ...form.secondForm };
  
  //==================================

  
  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(addPet(combinedForm))
    setForm({
      firstForm: {
        title: '',
        name: '',
        date: '',
        breed: '',
      },
      secondForm: {
        sex: '',
        location: '',
        price: '',
        avatarUrl: null,
        comment: '',
      },
    });
    // handleClose();
  };
  

  const handleClick = button => {
    setSelectedRadio(button);
  };
  //+++++++++++++++++++++++++++++++++++++++++++++++++++

  const hasFirstFormAllData = Object.values(form.firstForm).every(value => value)
  const hasSecondFormAllData = Object.values(form.secondForm).every(value => value)

  // console.log(form.secondForm.sex)
  return (
    <>
      {formType === 'firstForm' && (
        <FormContainer onSubmit={handleSubmit}>
          <AddPhoto>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur</AddPhoto>
          <Button type="button" onClick={() => setFormType('firstFoundForm')}>
            lost/found
          </Button>
          <Button type="button" onClick={() => setFormType('firstGoodHandsForm')}>
            in good hands
          </Button>
          <Button type="button" onClick={() => setFormType('firstForm')}>
            sell
          </Button>

          <InputBox>
            <InputLable htmlFor="title">Title of ad <span>*</span></InputLable>
            <InputField
              type="text"
              name="title"
              pattern="/^[a-zA-Z]{2,16}$/"
              value={form.firstForm.title}
              onChange={handleFirstFormChange}
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
              value={form.firstForm.name}
              onChange={handleFirstFormChange}
              placeholder="Name pet"
            />
            {/* {errors.name && <div>{errors.secondForm.name}</div>} */}
          </InputBox>
          <InputBox>
            <InputLable htmlFor="breed">Date of birth</InputLable>
            <InputField
              type="date"
              name="date"
              value={form.firstForm.date}
              onChange={handleFirstFormChange}
            // placeholder="DD/MM/YYYY/"
            />
          </InputBox>
          <InputBox>
            <InputLable htmlFor="breed">Breed</InputLable>
            <InputField
              type="text"
              name="breed"
              pattern="/^[a-zA-Z]{2,16}$/"
              value={form.firstForm.breed}
              onChange={handleFirstFormChange}
              placeholder="Breed"
            />
            {/* {errors.breed && <div>{errors.firstForm.breed}</div>} */}
          </InputBox>
          <ButtonContainer>
            <Button type="button" onClick={handleClose }>
              Cancel
            </Button>
            <Button type="button" onClick={() => setFormType('secondForm')} disabled={!hasFirstFormAllData}>
              Next
            </Button>
          </ButtonContainer>
        </FormContainer>
      )}
      {formType === 'secondForm' && (
        <NextFormContainer encType="mutipart/form-data" onSubmit={handleSubmit}>
          <SexButtons>
            <InputContainer>

              <InputMaleButton isSelected={selectedRadio === 'Male'}
                onClick={() => handleClick('Male')}>
                <InputRadio
                  type="radio"
                  name="secondForm.sex"
                  value='male'
                  checked={form.secondForm.sex === "male"}
                  onChange={handleRadioChange}
                />
              </InputMaleButton>
              <LabelMale for="radio1">Male</LabelMale>
            </InputContainer>

            <InputContainer>
              <InputFemaleButton isSelected={selectedRadio === 'Female'}
                onClick={() => handleClick('Female')}>
                <InputRadio
                  type="radio"
                  name="secondForm.sex"
                  value='female'
                  checked={form.secondForm.sex === "female"}
                  onChange={handleRadioChange}
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
              value={form.secondForm.location}
              onChange={handleSecondFormChange}
              placeholder="Location"
            />
            {/* {errors.breed && <div>{errors.firstForm.breed}</div>} */}
          </InputBox>
          <InputBox>
            <InputLable htmlFor="price">Price<span>*</span>:</InputLable>
            <InputField
              type="text"
              name="price"
              // pattern="/^[a-zA-Z]{2,16}$/"
              value={form.secondForm.price}
              onChange={handleSecondFormChange}
              placeholder="Price"
            />
            {/* {errors.breed && <div>{errors.firstForm.breed}</div>} */}
          </InputBox>
          <InputLable htmlFor="avatarUrl">Load the pet's image:</InputLable>
          <DownloadContainer>

            {form.secondForm.avatarUrl && (
              <Image src={form.secondForm.avatarUrl} alt="uploaded" />
            )}
            <Download
              name="avatarUrl"
              type="file"
              accept="image/*"
              onChange={handleSecondFormChange}
            />
          </DownloadContainer>
          <InputBox>
            <CommentsContainer>
              <Comments
                name="comment"
                type="text"
                pattern="^[a-zA-Z0-9,.!?;:-_ ]{8,120}$"
                value={form.secondForm.comment}
                onChange={handleSecondFormChange}
                placeholder="Type comments"
              />
              {/* {errors.comment && <div>{errors.secondForm.comment}</div>} */}
            </CommentsContainer>
          </InputBox>
          <ButtonContainer>
            <Button type="button" onClick={() => setFormType('firstForm')}>
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
