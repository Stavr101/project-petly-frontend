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
  DownloadContainer,
  NextFormContainer,
} from './ModalAddsPet.styled';

function Forma({ closeModalPets }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    date: '',
    image: null,
    comment: '',
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // send the formData to the server or do something else
    console.log(formData);
    setFormData({
      firstName: '',
      lastName: '',
      date: '',
      image: null,
      comment: '',
    });
  };

  const nextStep = e => {
    setStep(2);
  };

  const prevStep = () => {
    setStep(1);
  };

  switch (step) {
    case 1:
      return (
        <FormContainer onSubmit={handleSubmit}>
          <InputBox>
            <InputLable htmlFor="name">Name pet</InputLable>
            <InputField
              type="text"
              name="name"
              value={formData.name || ''}
              onChange={handleChange}
              placeholder="Name pet"
            />
          </InputBox>
          <InputBox>
            <InputLable htmlFor="breed">Date of birth</InputLable>
            <InputField
              type="date"
              name="date"
              value={formData.date || ''}
              onChange={handleChange}
              placeholder="DD/MM/YYYY/"
            />
          </InputBox>
          <InputBox>
            <InputLable htmlFor="breed">Breed</InputLable>
            <InputField
              type="text"
              name="breed"
              value={formData.breed || ''}
              onChange={handleChange}
              placeholder="Breed"
            />
          </InputBox>
          <ButtonContainer>
            <Button type="button" onClick={closeModalPets}>
              Close
            </Button>
            <Button type="button" onClick={nextStep}>
              Next
            </Button>
          </ButtonContainer>
        </FormContainer>
      );
    case 2:
      return (
        <NextFormContainer>
          <AddPhoto>Add photo and some comments</AddPhoto>
          {/* <img src="https://via.placeholder.com/150" alt="image"/> */}
          <DownloadContainer>
            <Download
              name="image"
              type="file"
              value={formData.image || ''}
              onChange={handleChange}
            />
          </DownloadContainer>
          <InputBox>
            <CommentsContainer>
              <Comments
                name="comment"
                type="text"
                value={formData.comment || ''}
                onChange={handleChange}
                placeholder="Type comments"
              />
            </CommentsContainer>
          </InputBox>
          <ButtonContainer>
            <Button type="button" onClick={prevStep}>
              Back
            </Button>
            <Button type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </ButtonContainer>
        </NextFormContainer>
      );
    default:
      return <div>Something went wrong</div>;
  }
}

export default Forma;
