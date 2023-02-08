import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPet } from "redux/pets/operations";
import { addPetToCategory } from "api/notices";

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
} from "./ModalAddNotice.styled";

// import { AddsPetValidate } from "helpers/validationSchema/addsPetValidate";
// Изменила функцию handleClose на closeModalPets для открытия модалки по нажатию кнопки в PetsData

function Forma({ handleClose }) {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [selectedRadio, setSelectedRadio] = useState("");

  const [formSell, setFormSell] = useState({
    sellFirstForm: {
      title: "",
      name: "",
      date: "",
      breed: "",
    },
    sellSecondForm: {
      sex: "",
      location: "",
      price: "",
      avatarUrl: null,
      comment: "",
    },
  });
  const [formFound, setFormFound] = useState({
    foundFirstForm: {
      title: "",
      name: "",
      date: "",
      breed: "",
    },
    foundSecondForm: {
      sex: "",
      location: "",
      avatarUrl: null,
      comment: "",
    },
  });
  const [formGoodHands, setFormGoodHands] = useState({
    goodHandsFirstForm: {
      title: "",
      name: "",
      date: "",
      breed: "",
    },
    goodHandsSecondForm: {
      sex: "",
      location: "",
      avatarFile: null,
      avatarUrl: null,
      comment: "",
    },
  });
  const today = new Date().toISOString().substr(0, 10);
  
  const [formType, setFormType] = useState("sellFirstForm");

  const handleSellFirstFormChange = (event) => {
    setFormSell({
      ...formSell,
      sellFirstForm: {
        ...formSell.sellFirstForm,
        [event.target.name]: event.target.value,
      },
    });
  };
  const handleSellSecondFormChange = (event) => {
    if (event.target.name === "avatarFile") {
      setFormSell({
        ...formSell,
        sellSecondForm: {
          ...formSell.sellSecondForm,
          avatarUrl: event.target.files[0],
          [event.target.name]: URL.createObjectURL(event.target.files[0]),
        },
      });
    } else {
      setFormSell({
        ...formSell,
        sellSecondForm: {
          ...formSell.sellSecondForm,
          [event.target.name]: event.target.value,
        },
      });
    }
  };
  const handleRadioChange = (event) => {
    setFormSell({
      ...formSell,
      sellSecondForm: {
        ...formSell.sellSecondForm,
        sex: event.target.value,
      },
    });
  };

  const handleFoundFirstFormChange = (event) => {
    setFormFound({
      ...formFound,
      foundFirstForm: {
        ...formFound.foundFirstForm,
        [event.target.name]: event.target.value,
      },
    });
  };
  const handleFoundSecondFormChange = (event) => {
    if (event.target.name === "avatarUrl") {
      setFormFound({
        ...formFound,
        foundSecondForm: {
          ...formFound.foundSecondForm,
          [event.target.name]: URL.createObjectURL(event.target.files[0]),
        },
      });
    } else {
      setFormFound({
        ...formFound,
        foundSecondForm: {
          ...formFound.foundSecondForm,
          [event.target.name]: event.target.value,
        },
      });
    }
  };
  const handleFoundRadioChange = (event) => {
    setFormFound({
      ...formFound,
      foundSecondForm: {
        ...formFound.foundSecondForm,
        sex: event.target.value,
      },
    });
  };

  const handleGoodHandsFirstFormChange = (event) => {
    setFormGoodHands({
      ...formGoodHands,
      goodHandsFirstForm: {
        ...formGoodHands.goodHandsFirstForm,
        [event.target.name]: event.target.value,
      },
    });
  };
  const handleGoodHandsSecondFormChange = (event) => {
    if (event.target.name === "avatarUrl") {
      setFormGoodHands({
        ...formGoodHands,
        goodHandsSecondForm: {
          ...formGoodHands.goodHandsSecondForm,
          avatarUrl: event.target.files[0],
          [event.target.name]: URL.createObjectURL(event.target.files[0]),
        },
      });
    } else {
      setFormGoodHands({
        ...formGoodHands,
        goodHandsSecondForm: {
          ...formGoodHands.goodHandsSecondForm,
          [event.target.name]: event.target.value,
        },
      });
    }
  };
  const handleGoodHandsRadioChange = (event) => {
    setFormGoodHands({
      ...formGoodHands,
      goodHandsSecondForm: {
        ...formGoodHands.goodHandsSecondForm,
        sex: event.target.value,
      },
    });
  };

  // const combinedSellForm = {
  //   ...formSell.sellFirstForm,
  //   ...formSell.sellSecondForm,
  // };
  // const combinedFoundForm = {
  //   ...formFound.foundFirstForm,
  //   ...formFound.foundSecondForm,
  // };
  // const combinedGoodHandsForm = {
  //   ...formGoodHands.goodHandsFirstForm,
  //   ...formGoodHands.goodHandsSecondForm,
  // };
  //==================================

  const sellHandleSubmit = async (event) => {
    const combinedForm = {
      ...formSell.sellFirstForm,
      ...formSell.sellSecondForm,
    };
    const { title, name, date, breed, sex, location, price, comment } =
      combinedForm;

    console.log("sell", event);

    const formDataFile = new FormData();
    formDataFile.append("title", title);
    formDataFile.append("name", name);
    formDataFile.append("birthdate", date);
    formDataFile.append("breed", breed);
    formDataFile.append("sex", sex);
    formDataFile.append("location", location);
    formDataFile.append("price", price);
    formDataFile.append("categoryName", "sell");
    formDataFile.append("petAvatar", event.target.elements.avatarFile.files[0]);
    formDataFile.append("comments", comment);

    addPetToCategory(formDataFile);

    setFormSell({
      sellFirstForm: {
        title: "",
        name: "",
        date: "",
        breed: "",
        // categoryName: 'sell',
      },
      sellSecondForm: {
        sex: "",
        location: "",
        price: "",
        avatarFile: null,
        avatarUrl: null,
        comment: "",
      },
    });
    handleClose();
  };

  const handleFoundSubmit = async (event) => {
    event.preventDefault();
    const combinedForm = {
      ...formFound.foundFirstForm,
      ...formFound.foundSecondForm,
    };

    const { title, name, date, breed, sex, location, comment } =
      combinedForm;
    console.log(combinedForm);

    // console.log("lost-form", event.target.elements[5].files[0]);

    const formDataFile = new FormData();
    formDataFile.append("title", title);
    formDataFile.append("name", name);
    formDataFile.append("birthdate", date);
    formDataFile.append("breed", breed);
    formDataFile.append("sex", sex);
    formDataFile.append("location", location);
    formDataFile.append("categoryName", "lost-found");
    formDataFile.append("petAvatar", event.target.elements[5].files[0]);
    formDataFile.append("comments", comment);

    addPetToCategory(formDataFile);

    setFormFound({
      foundFirstForm: {
        title: "",
        name: "",
        date: "",
        breed: "",
      },

      foundSecondForm: {
        sex: "",
        location: "",
        avatarUrl: null,
        comment: "",
      },
    });
     handleClose();
  };

  const handleGoodHandsSubmit = async (event) => {
    event.preventDefault();
    const combinedForm = {
      ...formGoodHands.goodHandsFirstForm,
      ...formGoodHands.goodHandsSecondForm,
    };

    const { title, name, date, breed, sex, location, comment } = combinedForm;

    console.log(combinedForm)

    console.log("good-hands", event.target.elements[5].files[0]);

    const formDataFile = new FormData();
    formDataFile.append("title", title);
    formDataFile.append("name", name);
    formDataFile.append("birthdate", date);
    formDataFile.append("breed", breed);
    formDataFile.append("sex", sex);
    formDataFile.append("location", location);
    formDataFile.append("categoryName", "for-free");
    formDataFile.append("petAvatar", event.target.elements[5].files[0]);
    formDataFile.append("comments", comment);

    addPetToCategory(formDataFile);

    setFormGoodHands({
      goodHandsFirstForm: {
        title: "",
        name: "",
        date: "",
        breed: "",
      },

      goodHandsSecondForm: {
        sex: "",
        location: "",
        avatarUrl: null,
        comment: "",
      },
    });
     handleClose();
  };
  
  const handleClick = (button) => {
    setSelectedRadio(button);
  };
  //+++++++++++++++++++++++++++++++++++++++++++++++++++

  const hasSellFirstFormAllData = Object.values(formSell.sellFirstForm).every(
    (value) => value
  );
  const hasSellSecondFormAllData = Object.values(formSell.sellSecondForm).every(
    (value) => value
  );

  const hasFoundFirstFormAllData = Object.values(
    formFound.foundFirstForm
  ).every((value) => value);
  const hasFoundSecondFormAllData = Object.values(
    formFound.foundSecondForm
  ).every((value) => value);

  const hasGoodHandsFirstFormAllData = Object.values(
    formGoodHands.goodHandsFirstForm
  ).every((value) => value);
  const hasGoodHandsSecondFormAllData = Object.values(
    formGoodHands.goodHandsSecondForm
  ).every((value) => value);
  // console.log(form.secondForm.sex)
  return (
    <>
      {formType === "sellFirstForm" && (
        <FormContainer onSubmit={sellHandleSubmit}>
          <AddPhoto>
            Lorem ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur
          </AddPhoto>
          <Button type="button" onClick={() => setFormType("foundFirstForm")}>
            lost/found
          </Button>
          <Button
            type="button"
            onClick={() => setFormType("goodHandsFirstForm")}
          >
            in good hands
          </Button>
          <Button
            type="button"
            style={{ backgroundColor: "#F59256", color: "white" }}
            onClick={() => setFormType("sellFirstForm")}
          >
            sell
          </Button>

          <InputBox>
            <InputLable htmlFor="title">
              Title of ad <span>*</span>
            </InputLable>
            <InputField
              type="text"
              name="title"
              pattern="/^[a-zA-Z]{2,16}$/"
              value={formSell.sellFirstForm.title}
              onChange={handleSellFirstFormChange}
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
              value={formSell.sellFirstForm.name}
              onChange={handleSellFirstFormChange}
              placeholder="Name pet"
            />
            {/* {errors.name && <div>{errors.secondForm.name}</div>} */}
          </InputBox>
          <InputBox>
            <InputLable htmlFor="date">Date of birth</InputLable>
            <InputField
              type="date"
              name="date"
              value={formSell.sellFirstForm.date}
              onChange={handleSellFirstFormChange}
              placeholder={today}
              max={today}

            />
          </InputBox>
          <InputBox>
            <InputLable htmlFor="breed">Breed</InputLable>
            <InputField
              type="text"
              name="breed"
              pattern="/^[a-zA-Z]{2,16}$/"
              value={formSell.sellFirstForm.breed}
              onChange={handleSellFirstFormChange}
              placeholder="Breed"
            />
            {/* {errors.breed && <div>{errors.firstForm.breed}</div>} */}
          </InputBox>
          <ButtonContainer>
            <Button type="button" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              type="button"
              onClick={() => setFormType("sellSecondForm")}
              disabled={!hasSellFirstFormAllData}
            >
              Next
            </Button>
          </ButtonContainer>
        </FormContainer>
      )}
      {formType === "sellSecondForm" && (
        <NextFormContainer
          encType="mutipart/form-data"
          onSubmit={sellHandleSubmit}
        >
          <SexButtons>
            <InputContainer>
              <InputMaleButton
                isSelected={selectedRadio === "male"}
                onClick={() => handleClick("male")}
              >
                <InputRadio
                  type="radio"
                  name="sellSecondForm.sex"
                  value="male"
                  checked={formSell.sellSecondForm.sex === "male"}
                  onChange={handleRadioChange}
                />
                <LabelMale htmlfor="radio1">Male</LabelMale>
              </InputMaleButton>
            </InputContainer>

            <InputContainer>
              <InputFemaleButton
                isSelected={selectedRadio === "female"}
                onClick={() => handleClick("female")}
              >
                <InputRadio
                  type="radio"
                  name="sellSecondForm.sex"
                  value="female"
                  checked={formSell.sellSecondForm.sex === "female"}
                  onChange={handleRadioChange}
                />
                <LabelFemale htmlfor="radio1">Female</LabelFemale>
              </InputFemaleButton>
            </InputContainer>
          </SexButtons>

          <InputBox>
            <InputLable htmlFor="location">
              Location<span>*</span>:
            </InputLable>
            <InputField
              type="text"
              name="location"
              // pattern="/^[a-zA-Z]{2,16}$/"
              value={formSell.sellSecondForm.location}
              onChange={handleSellSecondFormChange}
              placeholder="Location"
            />
            {/* {errors.breed && <div>{errors.firstForm.breed}</div>} */}
          </InputBox>
          <InputBox>
            <InputLable htmlFor="price">
              Price<span>*</span>:
            </InputLable>
            <InputField
              type="text"
              name="price"
              // pattern="/^[a-zA-Z]{2,16}$/"
              value={formSell.sellSecondForm.price}
              onChange={handleSellSecondFormChange}
              placeholder="Price"
            />
            {/* {errors.breed && <div>{errors.firstForm.breed}</div>} */}
          </InputBox>
          <InputLable htmlFor="avatarFile">Load the pet's image:</InputLable>
          <DownloadContainer>
            {formSell.sellSecondForm.avatarFile && (
              <Image src={formSell.sellSecondForm.avatarFile} alt="uploaded" />
            )}
            <Download
              name="avatarFile"
              type="file"
              accept="image/*"
              onChange={handleSellSecondFormChange}
            />
          </DownloadContainer>
          <InputBox>
            <CommentsContainer>
              <Comments
                name="comment"
                type="text"
                pattern="^[a-zA-Z0-9,.!?;:-_ ]{8,120}$"
                value={formSell.sellSecondForm.comment}
                onChange={handleSellSecondFormChange}
                placeholder="Type comments"
              />
              {/* {errors.comment && <div>{errors.secondForm.comment}</div>} */}
            </CommentsContainer>
          </InputBox>
          <ButtonContainer>
            <Button type="button" onClick={() => setFormType("sellFirstForm")}>
              Back
            </Button>
            <Button type="submit" disabled={!hasSellSecondFormAllData}>
              Done
            </Button>
          </ButtonContainer>
        </NextFormContainer>
      )}
      {formType === "foundFirstForm" && (
        <FormContainer onSubmit={handleFoundSubmit}>
          <AddPhoto>
            Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
            consectetur
          </AddPhoto>
          <Button
            type="button"
            style={{ backgroundColor: "#F59256", color: "white" }}
            onClick={() => setFormType("foundFirstForm")}
          >
            lost/found
          </Button>
          <Button
            type="button"
            onClick={() => setFormType("goodHandsFirstForm")}
          >
            in good hands
          </Button>
          <Button type="button" onClick={() => setFormType("sellFirstForm")}>
            sell
          </Button>

          <InputBox>
            <InputLable htmlFor="title">
              Title of ad <span>*</span>
            </InputLable>
            <InputField
              type="text"
              name="title"
              pattern="/^[a-zA-Z]{2,16}$/"
              value={formFound.foundFirstForm.title}
              onChange={handleFoundFirstFormChange}
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
              value={formFound.foundFirstForm.name}
              onChange={handleFoundFirstFormChange}
              placeholder="Name pet"
            />
            {/* {errors.name && <div>{errors.secondForm.name}</div>} */}
          </InputBox>
          <InputBox>
            <InputLable htmlFor="date">Date of birth</InputLable>
            <InputField
            type="date"
              name="date"
              value={formFound.foundFirstForm.date}            
              onChange={handleFoundFirstFormChange}
              placeholder={today}
              max={today}
            />
          </InputBox>
          <InputBox>
            <InputLable htmlFor="breed">Breed</InputLable>
            <InputField
              type="text"
              name="breed"
              pattern="/^[a-zA-Z]{2,16}$/"
              value={formFound.foundFirstForm.breed}
              onChange={handleFoundFirstFormChange}
              placeholder="Breed"
            />
            {/* {errors.breed && <div>{errors.firstForm.breed}</div>} */}
          </InputBox>
          <ButtonContainer>
            <Button type="button" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              type="button"
              onClick={() => setFormType("foundSecondForm")}
              disabled={!hasFoundFirstFormAllData}
            >
              Next
            </Button>
          </ButtonContainer>
        </FormContainer>
      )}
      {formType === "foundSecondForm" && (
        <NextFormContainer
          encType="mutipart/form-data"
          onSubmit={handleFoundSubmit}
        >
          <SexButtons>
            <InputContainer>
              <InputMaleButton
                isSelected={selectedRadio === "male"}
                onClick={() => handleClick("male")}
              >
                <InputRadio
                  type="radio"
                  name="foundSecondForm.sex"
                  value="male"
                  checked={formFound.foundSecondForm.sex === "male"}
                  onChange={handleFoundRadioChange}
                />
                <LabelMale htmlfor="radio1">Male</LabelMale>
              </InputMaleButton>
            </InputContainer>

            <InputContainer>
              <InputFemaleButton
                isSelected={selectedRadio === "female"}
                onClick={() => handleClick("female")}
              >
                <InputRadio
                  type="radio"
                  name="foundSecondForm.sex"
                  value="female"
                  checked={formFound.foundSecondForm.sex === "female"}
                  onChange={handleFoundRadioChange}
                />
                <LabelFemale htmlfor="radio1">Female</LabelFemale>
              </InputFemaleButton>
            </InputContainer>
          </SexButtons>

          <InputBox>
            <InputLable htmlFor="location">
              Location<span>*</span>:
            </InputLable>
            <InputField
              type="text"
              name="location"
              // pattern="/^[a-zA-Z]{2,16}$/"
              value={formFound.foundSecondForm.location}
              onChange={handleFoundSecondFormChange}
              placeholder="Location"
            />
            {/* {errors.breed && <div>{errors.firstForm.breed}</div>} */}
          </InputBox>

          <InputLable htmlFor="avatarUrl">Load the pet's image:</InputLable>
          <DownloadContainer>
            {formFound.foundSecondForm.avatarUrl && (
              <Image src={formFound.foundSecondForm.avatarUrl} alt="uploaded" />
            )}
            <Download
              name="avatarUrl"
              type="file"
              accept="image/*"
              onChange={handleFoundSecondFormChange}
            />
          </DownloadContainer>
          <InputBox>
            <CommentsContainer>
              <Comments
                name="comment"
                type="text"
                pattern="^[a-zA-Z0-9,.!?;:-_ ]{8,120}$"
                value={formFound.foundSecondForm.comment}
                onChange={handleFoundSecondFormChange}
                placeholder="Type comments"
              />
              {/* {errors.comment && <div>{errors.secondForm.comment}</div>} */}
            </CommentsContainer>
          </InputBox>
          <ButtonContainer>
            <Button type="button" onClick={() => setFormType("foundFirstForm")}>
              Back
            </Button>
            <Button
              type="submit"
            // disabled={!hasFoundSecondFormAllData}
            >
              Done
            </Button>
          </ButtonContainer>
        </NextFormContainer>
      )}
      {formType === "goodHandsFirstForm" && (
        <FormContainer onSubmit={handleGoodHandsSubmit}>
          <AddPhoto>
            Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
            consectetur
          </AddPhoto>
          <Button type="button" onClick={() => setFormType("foundFirstForm")}>
            lost/found
          </Button>
          <Button
            type="button"
            style={{ backgroundColor: "#F59256", color: "white" }}
            onClick={() => setFormType("goodHandsFirstForm")}
          >
            in good hands
          </Button>
          <Button type="button" onClick={() => setFormType("sellFirstForm")}>
            sell
          </Button>

          <InputBox>
            <InputLable htmlFor="title">
              Title of ad <span>*</span>
            </InputLable>
            <InputField
              type="text"
              name="title"
              pattern="/^[a-zA-Z]{2,16}$/"
              value={formGoodHands.goodHandsFirstForm.title}
              onChange={handleGoodHandsFirstFormChange}
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
              value={formGoodHands.goodHandsFirstForm.name}
              onChange={handleGoodHandsFirstFormChange}
              placeholder="Name pet"
            />
            {/* {errors.name && <div>{errors.secondForm.name}</div>} */}
          </InputBox>
          <InputBox>
            <InputLable htmlFor="date">Date of birth</InputLable>
            <InputField
             type="date"
              name="date"
               value={formGoodHands.goodHandsFirstForm.date}
              onChange={handleGoodHandsFirstFormChange}
              placeholder={today}
              max={today}
            />
          </InputBox>
          <InputBox>
            <InputLable htmlFor="breed">Breed</InputLable>
            <InputField
              type="text"
              name="breed"
              pattern="/^[a-zA-Z]{2,16}$/"
              value={formGoodHands.goodHandsFirstForm.breed}
              onChange={handleGoodHandsFirstFormChange}
              placeholder="Breed"
            />
            {/* {errors.breed && <div>{errors.firstForm.breed}</div>} */}
          </InputBox>
          <ButtonContainer>
            <Button type="button" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              type="button"
              onClick={() => setFormType("goodHandsSecondForm")}
              disabled={!hasGoodHandsFirstFormAllData}
            >
              Next
            </Button>
          </ButtonContainer>
        </FormContainer>
      )}
      {formType === "goodHandsSecondForm" && (
        <NextFormContainer
          encType="mutipart/form-data"
          onSubmit={handleGoodHandsSubmit}
        >
          <SexButtons>
            <InputContainer>
              <InputMaleButton
                isSelected={selectedRadio === "male"}
                onClick={() => handleClick("male")}
              >
                <InputRadio
                  type="radio"
                  name="goodHandsSecondForm.sex"
                  value="male"
                  checked={formGoodHands.goodHandsSecondForm.sex === "male"}
                  onChange={handleGoodHandsRadioChange}
                />
                <LabelMale htmlfor="radio1">Male</LabelMale>
              </InputMaleButton>
            </InputContainer>

            <InputContainer>
              <InputFemaleButton
                isSelected={selectedRadio === "female"}
                onClick={() => handleClick("female")}
              >
                <InputRadio
                  type="radio"
                  name="goodHandsSecondForm.sex"
                  value="female"
                  checked={formGoodHands.goodHandsSecondForm.sex === "female"}
                  onChange={handleGoodHandsRadioChange}
                />
                <LabelFemale htmlfor="radio1">Female</LabelFemale>
              </InputFemaleButton>
            </InputContainer>
          </SexButtons>
          <InputBox>
            <InputLable htmlFor="location">
              Location<span>*</span>:
            </InputLable>
            <InputField
              type="text"
              name="location"
              // pattern="/^[a-zA-Z]{2,16}$/"
              value={formGoodHands.goodHandsSecondForm.location}
              onChange={handleGoodHandsSecondFormChange}
              placeholder="Location"
            />
            {/* {errors.breed && <div>{errors.firstForm.breed}</div>} */}
          </InputBox>

          <InputLable htmlFor="avatarUrl">Load the pet's image:</InputLable>
          <DownloadContainer>
            {formGoodHands.goodHandsSecondForm.avatarUrl && (
              <Image
                src={formGoodHands.goodHandsSecondForm.avatarUrl}
                alt="uploaded"
              />
            )}
            <Download
              name="avatarUrl"
              type="file"
              accept="image/*"
              onChange={handleGoodHandsSecondFormChange}
            />
          </DownloadContainer>
          <InputBox>
            <CommentsContainer>
              <Comments
                name="comment"
                type="text"
                pattern="^[a-zA-Z0-9,.!?;:-_ ]{8,120}$"
                value={formGoodHands.goodHandsSecondForm.comment}
                onChange={handleGoodHandsSecondFormChange}
                placeholder="Type comments"
              />
              {/* {errors.comment && <div>{errors.secondForm.comment}</div>} */}
            </CommentsContainer>
          </InputBox>
          <ButtonContainer>
            <Button
              type="button"
              onClick={() => setFormType("goodHandsFirstForm")}
            >
              Back
            </Button>
            <Button type="submit"
            // disabled={!hasGoodHandsSecondFormAllData}
            >
              Done
            </Button>
          </ButtonContainer>
        </NextFormContainer>
      )}
    </>
  );
}

export default Forma;
