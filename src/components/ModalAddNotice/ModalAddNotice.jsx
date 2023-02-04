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
  SexButton,
  DownloadContainer,
  NextFormContainer,
} from './ModalAddNotice.styled';

import * as Yup from 'yup';

// import { AddsPetValidate } from "helpers/validationSchema/addsPetValidate";
// Изменила функцию handleClose на closeModalPets для открытия модалки по нажатию кнопки в PetsData
function Forma({ closeModalPets }) {
  const [errors, setErrors] = useState({});
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
      image: null,
      comment: '',
    },
  });


  const [formType, setFormType] = useState('firstForm');

  const handleFirstFormChange = event => {
    setForm({
      ...form,
      firstForm: {
        ...form.firstForm,
        [event.target.name]: event.target.value,
      },
    });
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


  const handleSecondFormChange = event => {
    if (event.target.name === 'image') {
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

  const combinedForm = { ...form.firstForm, ...form.secondForm };

  const handleSubmit = async event => {
    event.preventDefault();
    console.log(combinedForm);
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
        image: null,
        comment: '',
      },
    });
  };
  
// console.log(form.secondForm.sex)
  return (
    <>
      {formType === 'firstForm' && (
        <FormContainer onSubmit={handleSubmit}>
          <AddPhoto>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur</AddPhoto>
          <Button type="button" onClick={() => setFormType('secondForm')}>
            lost/found
          </Button>
          <Button type="button" onClick={() => setFormType('secondForm')}>
            in good hands
          </Button>
          <Button type="button" onClick={() => setFormType('secondForm')}>
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
            <Button type="button" onClick={closeModalPets}>
              Cancel
            </Button>
            <Button type="button" onClick={() => setFormType('secondForm')}>
              Next
            </Button>
          </ButtonContainer>
        </FormContainer>
      )}
      {formType === 'secondForm' && (
        <NextFormContainer encType="mutipart/form-data" onSubmit={handleSubmit}>
          <SexButton>
            <input
              type="radio"
              name="secondForm.sex"
              value='male'
              checked={form.secondForm.sex === "male"}
              onChange={handleRadioChange}
            />
            <label for="radio1"><img src="male.png" />Male</label>
            <input
            type="radio"
              name="secondForm.sex"
              value='female'
              checked={form.secondForm.sex === "female"}
              onChange={handleRadioChange}
            />
            <label for="radio1"><img src="female.png" />Female</label>
          </SexButton>

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
          <InputLable htmlFor="image">Load the pet's image:</InputLable>
          <DownloadContainer>

            {form.secondForm.image && (
              <Image src={form.secondForm.image} alt="uploaded" />
            )}
            <Download
              name="image"
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
            <Button type="submit">Done</Button>
          </ButtonContainer>
        </NextFormContainer>
      )}
    </>
  );
}

export default Forma;
