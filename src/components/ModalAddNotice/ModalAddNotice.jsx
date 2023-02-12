import React, { useState } from "react";
import { addPetToCategory } from "api/notices";
import { useTranslation } from "react-i18next";
import { useLocation, useParams } from "react-router-dom";
import {
  ButtonType,
  ButtonTypeContainer,
  Validations,
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

function Forma({ handleClose, petsAll, setPetsAll }) {
  const { t } = useTranslation();
  // const dispatch = useDispatch();
  // const [errors, setErrors] = useState({});
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
      avatarUrl: null,
      comment: "",
    },
  });
  const today = new Date().toISOString().substr(0, 10);

  const [formType, setFormType] = useState("sellFirstForm");

  const { categoryName } = useParams();
  const locationPets = useLocation();
  const isOnOwnPage = locationPets.pathname.includes("own");

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

  const sellHandleSubmit = async (event) => {
    event.preventDefault();

    const combinedForm = {
      ...formSell.sellFirstForm,
      ...formSell.sellSecondForm,
    };
    const { title, name, date, breed, sex, location, price, comment } =
      combinedForm;

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

    const res = await addPetToCategory(formDataFile);

    if (categoryName === res.categoryName || isOnOwnPage) {
      setPetsAll((prev) => [res, ...prev]);
    }

    setFormSell({
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

    const { title, name, date, breed, sex, location, comment } = combinedForm;

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

    const res = await addPetToCategory(formDataFile);

    if (categoryName === res.categoryName || isOnOwnPage) {
      setPetsAll((prev) => [res, ...prev]);
    }

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

    const res = await addPetToCategory(formDataFile);

    if (categoryName === res.categoryName || isOnOwnPage) {
      setPetsAll((prev) => [res, ...prev]);
    }

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
  return (
    <>
      {formType === "sellFirstForm" && (
        <FormContainer onSubmit={sellHandleSubmit}>
          <AddPhoto>{t("modal.info")}</AddPhoto>
          <ButtonTypeContainer>
            <ButtonType
              type="button"
              onClick={() => setFormType("foundFirstForm")}
            >
              {t("modal.lost")}
            </ButtonType>
            <ButtonType
              type="button"
              onClick={() => setFormType("goodHandsFirstForm")}
            >
              {t("modal.free")}
            </ButtonType>
          </ButtonTypeContainer>
          <ButtonType
            type="button"
            style={{ backgroundColor: "#F59256", color: "white" }}
            onClick={() => setFormType("sellFirstForm")}
          >
            {t("modal.sell")}
          </ButtonType>

          <InputBox>
            <InputLable htmlFor="title">
              {t("modal.title")} <span>*</span>
            </InputLable>
            <Validations
              className={
                formSell.sellFirstForm.title.match(
                  /^([A-Za-zА-Яа-яІі-\s]{2,48})?$/
                )
                  ? "invalid"
                  : ""
              }
            >
              {t("modal.check")}
            </Validations>
            <InputField
              type="text"
              name="title"
              value={formSell.sellFirstForm.title}
              onChange={handleSellFirstFormChange}
              placeholder={t("modal.titlepl")}
            />
          </InputBox>
          <InputBox>
            <InputLable htmlFor="name">{t("modal.name")}</InputLable>
            <Validations
              className={
                formSell.sellFirstForm.name.match(
                  /^([A-Za-zА-Яа-яІі-\s]{2,16})?$/
                )
                  ? "invalid"
                  : ""
              }
            >
              Please enter between 2 and 16 letters
            </Validations>
            <InputField
              type="text"
              name="name"
              value={formSell.sellFirstForm.name}
              onChange={handleSellFirstFormChange}
              placeholder={t("modal.namepl")}
            />
          </InputBox>
          <InputBox>
            <InputLable htmlFor="date">{t("modal.birth")}</InputLable>
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
            <InputLable htmlFor="breed">{t("modal.breed")}</InputLable>
            <Validations
              className={
                formSell.sellFirstForm.breed.match(
                  /^([A-Za-zА-Яа-яІі-\s]{2,16})?$/
                )
                  ? "invalid"
                  : ""
              }
            >
              Please enter between 2 and 16 letters
            </Validations>
            <InputField
              type="text"
              name="breed"
              value={formSell.sellFirstForm.breed}
              onChange={handleSellFirstFormChange}
              placeholder={t("modal.breedpl")}
            />
          </InputBox>
          <ButtonContainer>
            <Button type="button" onClick={handleClose}>
              {t("modal.canc")}
            </Button>
            <Button
              type="button"
              onClick={() => setFormType("sellSecondForm")}
              disabled={!hasSellFirstFormAllData}
            >
              {t("modal.next")}
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
                isSelected={formSell.sellSecondForm.sex === "male"}
                onClick={() => handleClick("male")}
              >
                <InputRadio
                  type="radio"
                  name="sellSecondForm.sex"
                  value="male"
                  checked={formSell.sellSecondForm.sex === "male"}
                  onChange={handleRadioChange}
                />
                <LabelMale htmlfor="radio1">{t("modal.m")}</LabelMale>
              </InputMaleButton>
            </InputContainer>

            <InputContainer>
              <InputFemaleButton
                isSelected={formSell.sellSecondForm.sex === "female"}
                onClick={() => handleClick("female")}
              >
                <InputRadio
                  type="radio"
                  name="sellSecondForm.sex"
                  value="female"
                  checked={formSell.sellSecondForm.sex === "female"}
                  onChange={handleRadioChange}
                />
                <LabelFemale htmlfor="radio1">{t("modal.f")}</LabelFemale>
              </InputFemaleButton>
            </InputContainer>
          </SexButtons>

          <InputBox>
            <InputLable htmlFor="location">
              {t("modal.location")}
              <span>*</span>:
            </InputLable>
            <Validations
              className={
                formSell.sellSecondForm.location.match(
                  /^$|^([A-Za-zА-Яа-яІі]+),\s([A-Za-zА-Яа-яІі]+)?$/
                )
                  ? "invalid"
                  : ""
              }
            >
              Please enter for exemple: Brovary, Kyiv
            </Validations>
            <InputField
              type="text"
              name="location"
              value={formSell.sellSecondForm.location}
              onChange={handleSellSecondFormChange}
              placeholder={t("modal.locationpl")}
            />
          </InputBox>
          <InputBox>
            <InputLable htmlFor="price">
              {t("modal.price")}
              <span>*</span>:
            </InputLable>
            <Validations
              className={
                formSell.sellSecondForm.price.match(/^(?!0)\d+$|^$/)
                  ? "invalid"
                  : ""
              }
            >
              Please enter price, for exemple: 340
            </Validations>
            <InputField
              type="text"
              name="price"
              value={formSell.sellSecondForm.price}
              onChange={handleSellSecondFormChange}
              placeholder={t("modal.pricepl")}
            />
          </InputBox>

          <InputLable htmlFor="avatarFile">{t("modal.img")}</InputLable>
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
              <Validations
                className={
                  formSell.sellSecondForm.comment.match(/^(.{8,120})?$/)
                    ? "invalid"
                    : ""
                }
              >
                {t("validation.commentcheckModal")}
              </Validations>
              <Comments
                name="comment"
                type="text"
                value={formSell.sellSecondForm.comment}
                onChange={handleSellSecondFormChange}
                placeholder={t("modal.comm")}
              />
            </CommentsContainer>
          </InputBox>
          <ButtonContainer>
            <Button type="button" onClick={() => setFormType("sellFirstForm")}>
              {t("modal.back")}
            </Button>
            <Button type="submit" disabled={!hasSellSecondFormAllData}>
              {t("modal.done")}
            </Button>
          </ButtonContainer>
        </NextFormContainer>
      )}
      {formType === "foundFirstForm" && (
        <FormContainer onSubmit={handleFoundSubmit}>
          <AddPhoto>{t("modal.info")}</AddPhoto>
          <ButtonTypeContainer>
            <ButtonType
              type="button"
              style={{ backgroundColor: "#F59256", color: "white" }}
              onClick={() => setFormType("foundFirstForm")}
            >
              lost/found
            </ButtonType>
            <ButtonType
              type="button"
              onClick={() => setFormType("goodHandsFirstForm")}
            >
              in good hands
            </ButtonType>
          </ButtonTypeContainer>
          <ButtonType
            type="button"
            onClick={() => setFormType("sellFirstForm")}
          >
            sell
          </ButtonType>

          <InputBox>
            <InputLable htmlFor="title">
              {t("modal.title")} <span>*</span>
            </InputLable>
            <Validations
              className={
                formFound.foundFirstForm.title.match(
                  /^([A-Za-zА-Яа-яІі-\s]{2,48})?$/
                )
                  ? "invalid"
                  : ""
              }
            >
              Please enter between 2 and 48 letters
            </Validations>
            <InputField
              type="text"
              name="title"
              value={formFound.foundFirstForm.title}
              onChange={handleFoundFirstFormChange}
              placeholder="Type name"
            />
          </InputBox>
          <InputBox>
            <InputLable htmlFor="name">Name pet</InputLable>
            <Validations
              className={
                formFound.foundFirstForm.name.match(
                  /^([A-Za-zА-Яа-яІі-\s]{2,16})?$/
                )
                  ? "invalid"
                  : ""
              }
            >
              Please enter between 2 and 16 letters
            </Validations>
            <InputField
              type="text"
              name="name"
              value={formFound.foundFirstForm.name}
              onChange={handleFoundFirstFormChange}
              placeholder="Name pet"
            />
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
            <Validations
              className={
                formFound.foundFirstForm.breed.match(
                  /^([A-Za-zА-Яа-яІі-\s]{2,16})?$/
                )
                  ? "invalid"
                  : ""
              }
            >
              Please enter between 2 and 16 letters
            </Validations>
            <InputField
              type="text"
              name="breed"
              value={formFound.foundFirstForm.breed}
              onChange={handleFoundFirstFormChange}
              placeholder="Breed"
            />
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
              {t("modal.next")}
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
                isSelected={formFound.foundSecondForm.sex === "male"}
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
                isSelected={formFound.foundSecondForm.sex === "female"}
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
            <Validations
              className={
                formFound.foundSecondForm.location.match(
                  /^$|^([A-Za-zА-Яа-яІі]+),\s([A-Za-zА-Яа-яІі]+)?$/
                )
                  ? "invalid"
                  : ""
              }
            >
              Please enter for exemple: Brovary, Kyiv
            </Validations>
            <InputField
              type="text"
              name="location"
              value={formFound.foundSecondForm.location}
              onChange={handleFoundSecondFormChange}
              placeholder="Location"
            />
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
              <Validations
                className={
                  formFound.foundSecondForm.comment.match(/^(.{8,120})?$/)
                    ? "invalid"
                    : ""
                }
              >
                Please enter between 8 and 120 symbols
              </Validations>
              <Comments
                name="comment"
                type="text"
                value={formFound.foundSecondForm.comment}
                onChange={handleFoundSecondFormChange}
                placeholder="Type comments"
              />
            </CommentsContainer>
          </InputBox>
          <ButtonContainer>
            <Button type="button" onClick={() => setFormType("foundFirstForm")}>
              Back
            </Button>
            <Button type="submit" disabled={!hasFoundSecondFormAllData}>
              Done
            </Button>
          </ButtonContainer>
        </NextFormContainer>
      )}
      {formType === "goodHandsFirstForm" && (
        <FormContainer onSubmit={handleGoodHandsSubmit}>
          <AddPhoto>{t("modal.info")}</AddPhoto>
          <ButtonTypeContainer>
            <ButtonType
              type="button"
              onClick={() => setFormType("foundFirstForm")}
            >
              lost/found
            </ButtonType>
            <ButtonType
              type="button"
              style={{ backgroundColor: "#F59256", color: "white" }}
              onClick={() => setFormType("goodHandsFirstForm")}
            >
              in good hands
            </ButtonType>
          </ButtonTypeContainer>
          <ButtonType
            type="button"
            onClick={() => setFormType("sellFirstForm")}
          >
            sell
          </ButtonType>

          <InputBox>
            <InputLable htmlFor="title">
              {t("modal.title")} <span>*</span>
            </InputLable>
            <Validations
              className={
                formGoodHands.goodHandsFirstForm.title.match(
                  /^([A-Za-zА-Яа-яІі-\s]{2,48})?$/
                )
                  ? "invalid"
                  : ""
              }
            >
              Please enter between 2 and 48 letters
            </Validations>
            <InputField
              type="text"
              name="title"
              value={formGoodHands.goodHandsFirstForm.title}
              onChange={handleGoodHandsFirstFormChange}
              placeholder="Type name"
            />
          </InputBox>
          <InputBox>
            <InputLable htmlFor="name">Name pet</InputLable>
            <Validations
              className={
                formGoodHands.goodHandsFirstForm.name.match(
                  /^([A-Za-zА-Яа-яІі-\s]{2,16})?$/
                )
                  ? "invalid"
                  : ""
              }
            >
              Please enter between 2 and 16 letters
            </Validations>
            <InputField
              type="text"
              name="name"
              value={formGoodHands.goodHandsFirstForm.name}
              onChange={handleGoodHandsFirstFormChange}
              placeholder="Name pet"
            />
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
            <Validations
              className={
                formGoodHands.goodHandsFirstForm.breed.match(
                  /^([A-Za-zА-Яа-яІі-\s]{2,16})?$/
                )
                  ? "invalid"
                  : ""
              }
            >
              Please enter between 2 and 16 letters
            </Validations>
            <InputField
              type="text"
              name="breed"
              value={formGoodHands.goodHandsFirstForm.breed}
              onChange={handleGoodHandsFirstFormChange}
              placeholder="Breed"
            />
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
              {t("modal.next")}
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
                isSelected={formGoodHands.goodHandsSecondForm.sex === "male"}
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
                isSelected={formGoodHands.goodHandsSecondForm.sex === "female"}
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
            <Validations
              className={
                formGoodHands.goodHandsSecondForm.location.match(
                  /^$|^([A-Za-zА-Яа-яІі]+),\s([A-Za-zА-Яа-яІі]+)?$/
                )
                  ? "invalid"
                  : ""
              }
            >
              Please enter for exemple: Brovary, Kyiv
            </Validations>

            <InputField
              type="text"
              name="location"
              value={formGoodHands.goodHandsSecondForm.location}
              onChange={handleGoodHandsSecondFormChange}
              placeholder="Location"
            />
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
              <Validations
                className={
                  formGoodHands.goodHandsSecondForm.comment.match(
                    /^(.{8,120})?$/
                  )
                    ? "invalid"
                    : ""
                }
              >
                {t("validation.commentcheckModal")}
              </Validations>
              <Comments
                name="comment"
                type="text"
                value={formGoodHands.goodHandsSecondForm.comment}
                onChange={handleGoodHandsSecondFormChange}
                placeholder="Type comments"
              />
            </CommentsContainer>
          </InputBox>
          <ButtonContainer>
            <Button
              type="button"
              onClick={() => setFormType("goodHandsFirstForm")}
            >
              Back
            </Button>
            <Button type="submit" disabled={!hasGoodHandsSecondFormAllData}>
              Done
            </Button>
          </ButtonContainer>
        </NextFormContainer>
      )}
    </>
  );
}

export default Forma;
