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
    firstSellForm: {
      title: '',
      name: '',
      date: '',
      breed: '',
    },
    secondSellForm: {
      sex: '',
      location: '',
      price: '',
      image: null,
      comment: '',
    },
  });


  const [formType, setFormType] = useState('firstSellForm');

  const handleFirstSellFormChange = event => {
    setForm({
      ...form,
      firstSellForm: {
        ...form.firstSellForm,
        [event.target.name]: event.target.value,
      },
    });
  };

  const handleSellRadioChange = event => {
    setForm({
      ...form,
      secondSellForm: {
        ...form.secondSellForm,
         sex: event.target.value
      }
    });
  };


  const handleSecondSellFormChange = event => {
    if (event.target.name === 'image') {
      setForm({
        ...form,
        secondSellForm: {
          ...form.secondSellForm,
          [event.target.name]: URL.createObjectURL(event.target.files[0]),
        }
      });
    } else {
      setForm({
        ...form,
        secondSellForm: {
          ...form.secondSellForm,
          [event.target.name]: event.target.value,
         
        },
      });
    }
  };

  const combinedSellForm = { ...form.firstSellForm, ...form.secondSellForm };

  const handleSellSubmit = async event => {
    event.preventDefault();
    console.log(combinedSellForm);
    setForm({
      firstSellForm: {
        title: '',
        name: '',
        date: '',
        breed: '',
      },
      secondSellForm: {
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
      {formType === 'firstSellForm' && (
        <FormContainer onSubmit={handleSellSubmit}>
          <AddPhoto>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur</AddPhoto>
          <Button type="button" onClick={() => setFormType('secondSellForm')}>
            lost/found
          </Button>
          <Button type="button" onClick={() => setFormType('secondSellForm')}>
            in good hands
          </Button>
          <Button type="button" onClick={() => setFormType('secondSellForm')}>
            sell
          </Button>

          <InputBox>
            <InputLable htmlFor="title">Title of ad <span>*</span></InputLable>
            <InputField
              type="text"
              name="title"
              pattern="/^[a-zA-Z]{2,16}$/"
              value={form.firstSellForm.title}
              onChange={handleFirstSellFormChange}
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
              value={form.firstSellForm.name}
              onChange={handleFirstSellFormChange}
              placeholder="Name pet"
            />
            {/* {errors.name && <div>{errors.secondForm.name}</div>} */}
          </InputBox>
          <InputBox>
            <InputLable htmlFor="breed">Date of birth</InputLable>
            <InputField
              type="date"
              name="date"
              value={form.firstSellForm.date}
              onChange={handleFirstSellFormChange}
            // placeholder="DD/MM/YYYY/"
            />
          </InputBox>
          <InputBox>
            <InputLable htmlFor="breed">Breed</InputLable>
            <InputField
              type="text"
              name="breed"
              pattern="/^[a-zA-Z]{2,16}$/"
              value={form.firstSellForm.breed}
              onChange={handleFirstSellFormChange}
              placeholder="Breed"
            />
            {/* {errors.breed && <div>{errors.firstForm.breed}</div>} */}
          </InputBox>
          <ButtonContainer>
            <Button type="button" onClick={closeModalPets}>
              Cancel
            </Button>
            <Button type="button" onClick={() => setFormType('secondSellForm')}>
              Next
            </Button>
          </ButtonContainer>
        </FormContainer>
      )}
      {formType === 'secondSellForm' && (
        <NextFormContainer encType="mutipart/form-data" onSubmit={handleSellSubmit}>
          <SexButton>
            <input
              type="radio"
              name="secondSellForm.sex"
              value='male'
              checked={form.secondSellForm.sex === "male"}
              onChange={handleSellRadioChange}
            />
            <label for="radio1"><img src="male.png" />Male</label>
            <input
            type="radio"
              name="secondSellForm.sex"
              value='female'
              checked={form.secondSellForm.sex === "female"}
              onChange={handleSellRadioChange}
            />
            <label for="radio1"><img src="female.png" />Female</label>
          </SexButton>

          <InputBox>
            <InputLable htmlFor="location">Location<span>*</span>:</InputLable>
            <InputField
              type="text"
              name="location"
              // pattern="/^[a-zA-Z]{2,16}$/"
              value={form.secondSellForm.location}
              onChange={handleSecondSellFormChange}
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
              value={form.secondSellForm.price}
              onChange={handleSecondSellFormChange}
              placeholder="Price"
            />
            {/* {errors.breed && <div>{errors.firstForm.breed}</div>} */}
          </InputBox>
          <InputLable htmlFor="image">Load the pet's image:</InputLable>
          <DownloadContainer>

            {form.secondSellForm.image && (
              <Image src={form.secondSellForm.image} alt="uploaded" />
            )}
            <Download
              name="image"
              type="file"
              accept="image/*"
              onChange={handleSecondSellFormChange}
            />
          </DownloadContainer>
          <InputBox>
            <CommentsContainer>
              <Comments
                name="comment"
                type="text"
                pattern="^[a-zA-Z0-9,.!?;:-_ ]{8,120}$"
                value={form.secondSellForm.comment}
                onChange={handleSecondSellFormChange}
                placeholder="Type comments"
              />
              {/* {errors.comment && <div>{errors.secondForm.comment}</div>} */}
            </CommentsContainer>
          </InputBox>
          <ButtonContainer>
            <Button type="button" onClick={() => setFormType('firstSellForm')}>
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
