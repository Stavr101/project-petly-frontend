import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addPet } from 'redux/pets/operations';
// import { addPetFound } from 'redux/pets/operations';
// import { addPetGoodHands } from 'redux/pets/operations';
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


function Forma({ closeModalPets }) {
  const [selectedRadio, setSelectedRadio] = useState('');
  const [errors, setErrors] = useState({});
const dispatch = useDispatch();
  const [formSell, setFormSell] = useState({
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
  const [formFound, setFormFound] = useState({
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
  const [formGoodHands, setFormGoodHands] = useState({
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

  const [formType, setFormType] = useState('firstSellForm');
 
  const handleFirstSellFormChange = event => {
    setFormSell({
      ...formSell,
      firstSellForm: {
        ...formSell.firstSellForm,
        [event.target.name]: event.target.value,
      },
    });
  };
  const handleSecondSellFormChange = event => {
    if (event.target.name === 'image') {
      setFormSell({
        ...formSell,
        secondSellForm: {
          ...formSell.secondSellForm,
          [event.target.name]: URL.createObjectURL(event.target.files[0]),
        }
      });
    } else {
      setFormSell({
        ...formSell,
        secondSellForm: {
          ...formSell.secondSellForm,
          [event.target.name]: event.target.value,

        },
      });
    }
  };
  const handleSellRadioChange = event => {
    setFormSell({
      ...formSell,
      secondSellForm: {
        ...formSell.secondSellForm,
        sex: event.target.value

      }
    });
  };

  const handleFirstGoodHandsFormChange = event => {
    setFormGoodHands({
      ...formGoodHands,
      firstGoodHandsForm: {
        ...formGoodHands.firstGoodHandsForm,
        [event.target.name]: event.target.value,
      },
    });
  };
  const handleSecondGoodHandsFormChange = event => {
    if (event.target.name === 'image') {
      setFormGoodHands({
        ...formGoodHands,
        secondGoodHandsForm: {
          ...formGoodHands.secondGoodHandsForm,
          [event.target.name]: URL.createObjectURL(event.target.files[0]),
        }
      });
    } else {
      setFormGoodHands({
        ...formGoodHands,
        secondGoodHandsForm: {
          ...formGoodHands.secondGoodHandsForm,
          [event.target.name]: event.target.value,
         
        },
      });
    }
  };
  const handleGoodHandsRadioChange = event => {
    setFormGoodHands({
      ...formGoodHands,
      secondGoodHandsForm: {
        ...formGoodHands.secondGoodHandsForm,
        sex: event.target.value
         
      }
    });
  };

  const handleFirstFoundFormChange = event => {
    setFormFound({
      ...formFound,
      firstFoundForm: {
        ...formFound.firstFoundForm,
        [event.target.name]: event.target.value,
      },
    });
  };
  const handleSecondFoundFormChange = event => {
    if (event.target.name === 'image') {
      setFormFound({
        ...formFound,
        secondFoundForm: {
          ...formFound.secondFoundForm,
          [event.target.name]: URL.createObjectURL(event.target.files[0]),
        }
      });
    } else {
      setFormFound({
        ...formFound,
        secondFoundForm: {
          ...formFound.secondFoundForm,
          [event.target.name]: event.target.value,
         
        },
      });
    }
  };
  const handleFoundRadioChange = event => {
    setFormFound({
      ...formFound,
      secondSFoundForm: {
        ...formFound.secondFoundForm,
        sex: event.target.value
         
      }
    });
  };
 
  const combinedSellForm = { ...formSell.firstSellForm, ...formSell.secondSellForm };
  const combinedFoundForm = { ...formFound.firstFoundForm, ...formFound.secondFoundForm };
  const combinedGoodHandsForm = { ...formGoodHands.firstGoodHandsForm, ...formGoodHands.secondGoodHandsForm };
  //==================================

  
  const handleSellSubmit = async (event) => {
    event.preventDefault();
    dispatch(addPet(combinedSellForm))
    setFormSell({
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
    // handleClose();
  };
  const handleGoodHandsSubmit = async (event) => {
    event.preventDefault();
    dispatch(addPet(combinedGoodHandsForm))
   setFormGoodHands({
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
    // handleClose();
  };
  const handleFoundSubmit = async event => {
    event.preventDefault();
    console.log(combinedFoundForm);
    dispatch(addPet(combinedGoodHandsForm))
    setFormFound({
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

  const handleClick = button => {
    setSelectedRadio(button);
  };
  //+++++++++++++++++++++++++++++++++++++++++++++++++++

  const hasFirstSellFormAllData = Object.values(formSell.firstForm).every(value => value)
  const hasSecondSellFormAllData = Object.values(formSell.secondForm).every(value => value)

  const hasFirstFoundFormAllData = Object.values(formFound.firstFoundForm).every(value => value)
  const hasSecondFoundFormAllData = Object.values(formFound.secondFoundForm).every(value => value)

  const hasFirstGoodHandsFormAllData = Object.values(formSell.firstGoodHandsForm).every(value => value)
  const hasSecondGoodHandsFormAllData = Object.values(formSell.secondGoodHandsForm).every(value => value)

  // console.log(form.secondForm.sex)
  return (
    <>
      {formType === 'firstSellForm' && (
        <FormContainer onSubmit={handleSellSubmit}>
          <AddPhoto>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur</AddPhoto>
          <Button type="button" onClick={() => setFormType('firstFoundForm')}>
            lost/found
          </Button>
          <Button type="button" onClick={() => setFormType('firstGoodHandsForm')}>
            in good hands
          </Button>
          <Button type="button" onClick={() => setFormType('firstSellForm')}>
            sell
          </Button>

          <InputBox>
            <InputLable htmlFor="title">Title of ad <span>*</span></InputLable>
            <InputField
              type="text"
              name="title"
              pattern="/^[a-zA-Z]{2,16}$/"
              value={formSell.firstSellForm.title}
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
              value={formSell.firstSellForm.name}
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
              value={formSell.firstSellForm.date}
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
              value={formSell.firstSellForm.breed}
              onChange={handleFirstSellFormChange}
              placeholder="Breed"
            />
            {/* {errors.breed && <div>{errors.firstForm.breed}</div>} */}
          </InputBox>
          <ButtonContainer>
            <Button type="button" onClick={closeModalPets}>
              Cancel
            </Button>
            <Button type="button" onClick={() => setFormType('secondSellForm')} disabled={!hasFirstSellFormAllData}>
              Next
            </Button>
          </ButtonContainer>
        </FormContainer>
      )}
      {formType === 'secondSellForm' && (
        <NextFormContainer encType="mutipart/form-data" onSubmit={handleSellSubmit}>
          <SexButtons>
            <InputContainer>

              <InputMaleButton isSelected={selectedRadio === 'Male'}
                onClick={() => handleClick('Male')}>
                <InputRadio
                  type="radio"
                  name="secondSellForm.sex"
                  value='male'
                  checked={formSell.secondSellForm.sex === "male"}
                  onChange={handleSellRadioChange}
                />
              </InputMaleButton>
              <LabelMale for="radio1">Male</LabelMale>
            </InputContainer>

            <InputContainer>
              <InputFemaleButton isSelected={selectedRadio === 'Female'}
                onClick={() => handleClick('Female')}>
                <InputRadio
                  type="radio"
                  name="secondSellForm.sex"
                  value='female'
                  checked={formSell.secondSellForm.sex === "female"}
                  onChange={handleSellRadioChange}
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
              value={formSell.secondSellForm.location}
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
              value={formSell.secondSellForm.price}
              onChange={handleSecondSellFormChange}
              placeholder="Price"
            />
            {/* {errors.breed && <div>{errors.firstForm.breed}</div>} */}
          </InputBox>
          <InputLable htmlFor="image">Load the pet's image:</InputLable>
          <DownloadContainer>

            {formSell.secondSellForm.image && (
              <Image src={formSell.secondSellForm.image} alt="uploaded" />
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
                value={formSell.secondSellForm.comment}
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
            <Button type="submit" disabled={!hasSecondSellFormAllData}>Done</Button>
          </ButtonContainer>
        </NextFormContainer>
      )}
      {formType === 'firstFoundForm' && (
        <FormContainer onSubmit={handleFoundSubmit}>
          <AddPhoto>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur</AddPhoto>
          <Button type="button" onClick={() => setFormType('firstFoundForm')}>
            lost/found
          </Button>
          <Button type="button" onClick={() => setFormType('firstGoodHandsForm')}>
            in good hands
          </Button>
          <Button type="button" onClick={() => setFormType('firstSellForm')}>
            sell
          </Button>

          <InputBox>
            <InputLable htmlFor="title">Title of ad <span>*</span></InputLable>
            <InputField
              type="text"
              name="title"
              pattern="/^[a-zA-Z]{2,16}$/"
              value={formFound.firstFoundForm.title}
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
              value={formFound.firstFoundForm.name}
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
              value={formFound.firstFoundForm.date}
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
              value={formFound.firstFoundForm.breed}
              onChange={handleFirstFoundFormChange}
              placeholder="Breed"
            />
            {/* {errors.breed && <div>{errors.firstForm.breed}</div>} */}
          </InputBox>
          <ButtonContainer>
            <Button type="button" onClick={closeModalPets}>
              Cancel
            </Button>
            <Button type="button" onClick={() => setFormType('secondFoundForm')} disabled={!hasFirstFoundFormAllData}>
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
                  checked={formFound.secondFoundForm.sex === "male"}
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
                  checked={formFound.secondFoundForm.sex === "female"}
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
              value={formFound.secondFoundForm.location}
              onChange={handleSecondFoundFormChange}
              placeholder="Location"
            />
            {/* {errors.breed && <div>{errors.firstForm.breed}</div>} */}
          </InputBox>

          <InputLable htmlFor="image">Load the pet's image:</InputLable>
          <DownloadContainer>

            {formFound.secondFoundForm.image && (
              <Image src={formFound.secondFoundForm.image} alt="uploaded" />
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
                value={formFound.secondFoundForm.comment}
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
            <Button type="submit" disabled={!hasSecondFoundFormAllData}>Done</Button>
          </ButtonContainer>
        </NextFormContainer>
      )}
      {formType === 'firstGoodHandsForm' && (
        <FormContainer onSubmit={handleGoodHandsSubmit}>
          <AddPhoto>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur</AddPhoto>
          <Button type="button" onClick={() => setFormType('firstFoundForm')}>
            lost/found
          </Button>
          <Button type="button" onClick={() => setFormType('firstGoodHandsForm')}>
            in good hands
          </Button>
          <Button type="button" onClick={() => setFormType('firstSellForm')}>
            sell
          </Button>

          <InputBox>
            <InputLable htmlFor="title">Title of ad <span>*</span></InputLable>
            <InputField
              type="text"
              name="title"
              pattern="/^[a-zA-Z]{2,16}$/"
              value={formGoodHands.firstGoodHandsForm.title}
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
              value={formGoodHands.firstGoodHandsForm.name}
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
              value={formGoodHands.firstGoodHandsForm.date}
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
              value={formGoodHands.firstGoodHandsForm.breed}
              onChange={handleFirstGoodHandsFormChange}
              placeholder="Breed"
            />
            {/* {errors.breed && <div>{errors.firstForm.breed}</div>} */}
          </InputBox>
          <ButtonContainer>
            <Button type="button" onClick={closeModalPets}>
              Cancel
            </Button>
            <Button type="button" onClick={() => setFormType('secondGoodHandsForm')} disabled={!hasFirstGoodHandsFormAllData}>
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
                  checked={formGoodHands.secondGoodHandsForm.sex === "male"}
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
                  checked={formGoodHands.secondGoodHandsForm.sex === "female"}
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
              value={formGoodHands.secondGoodHandsForm.location}
              onChange={handleSecondGoodHandsFormChange}
              placeholder="Location"
            />
            {/* {errors.breed && <div>{errors.firstForm.breed}</div>} */}
          </InputBox>

          <InputLable htmlFor="image">Load the pet's image:</InputLable>
          <DownloadContainer>

            {formGoodHands.secondGoodHandsForm.image && (
              <Image src={formGoodHands.secondGoodHandsForm.image} alt="uploaded" />
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
                value={formGoodHands.secondGoodHandsForm.comment}
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
            <Button type="submit" disabled={!hasSecondGoodHandsFormAllData}>Done</Button>
          </ButtonContainer>
        </NextFormContainer>
      )}
    </>
  );
}

export default Forma;
