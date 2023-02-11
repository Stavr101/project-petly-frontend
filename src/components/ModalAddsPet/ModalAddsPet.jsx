import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPet } from "redux/pets/operations";
import { useTranslation } from 'react-i18next';

import {
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
  DownloadContainer,
  NextFormContainer,
} from "./ModalAddsPet.styled";

function Forma({ handleClose }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    firstForm: {
      name: "",
      date: "",
      breed: "",
    },
    secondForm: {
      avatarFile: null,
      avatarUrl: null,
      comment: "",
    },
  });

  const today = new Date().toISOString().substr(0, 10);
  const [formType, setFormType] = useState("firstForm");

  const handleFirstFormChange = (event) => {
    setForm({
      ...form,
      firstForm: {
        ...form.firstForm,
        [event.target.name]: event.target.value,
      },
    });
  };

  const handleSecondFormChange = (event) => {
    if (event.target.name === "avatarFile") {
      setForm({
        ...form,
        secondForm: {
          ...form.secondForm,
          avatarUrl: event.target.files[0],
          [event.target.name]: URL.createObjectURL(event.target.files[0]),
        },
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const combinedForm = { ...form.firstForm, ...form.secondForm };
    const { name, breed, date, comment } = combinedForm;
    const formDataFile = new FormData();
    formDataFile.append("avatarUrl", event.target.elements.avatarFile.files[0]);
    formDataFile.append("name", name);
    formDataFile.append("breed", breed);
    formDataFile.append("date", date);
    formDataFile.append("comment", comment);

    console.log(formDataFile);

    dispatch(addPet(formDataFile));
    setForm({
      firstForm: {
        name: "",
        date: "",
        breed: "",
      },
      secondForm: {
        avatarFile: null,
        avatarUrl: null,
        comment: "",
      },
    });
    handleClose();
  };

  const hasFirstFormAllData = Object.values(form.firstForm).every(
    (value) => value
  );
  const hasSecondFormAllData = Object.values(form.secondForm).every(
    (value) => value
  );

  return (
    <>
      {formType === "firstForm" && (
        <FormContainer onSubmit={handleSubmit} encType="multipart/form-data">
          <InputBox>
            <InputLable htmlFor="name">{t("modal.name")}</InputLable>
            <Validations
              className={form.firstForm.name.match(/^([a-zA-Z\s-]{2,16})?$/) ? "invalid" : ""}>
              Please enter between 2 and 16 letters
            </Validations>
            <InputField
              type="text"
              name="name"
              pattern="/^([a-zA-Z\s-]{2,16})?$/"
              value={form.firstForm.name}
              onChange={handleFirstFormChange}
              placeholder="Name pet"
            />
          </InputBox>
          <InputBox>
            <InputLable htmlFor="breed">{t("modal.birth")}</InputLable>
            <InputField
              type="date"
              name="date"
              value={form.firstForm.date}
              onChange={handleFirstFormChange}
              placeholder={today}
              max={today}


            />
          </InputBox>
          <InputBox>
            <InputLable htmlFor="breed">{t("modal.breed")}</InputLable>
            <Validations
              className={form.firstForm.breed.match(/^([a-zA-Z\s-]{2,16})?$/) ? "invalid" : ""}>
              Please enter between 2 and 16 letters
            </Validations>
            <InputField
              type="text"
              name="breed"
              pattern="/^([a-zA-Z\s-]{2,16})?$/"
              value={form.firstForm.breed}
              onChange={handleFirstFormChange}
              placeholder="Breed"
            />
            {/* {errors.breed && <div>{errors.firstForm.breed}</div>} */}
          </InputBox>
          <ButtonContainer>
            <Button type="button" onClick={handleClose}>
              {t("modal.close")}
            </Button>
            <Button
              type="button"
              onClick={() => setFormType("secondForm")}
              disabled={!hasFirstFormAllData}
            >
              {t("modal.next")}
            </Button>
          </ButtonContainer>
        </FormContainer>
      )}
      {formType === "secondForm" && (
        <NextFormContainer encType="mutipart/form-data" onSubmit={handleSubmit}>
          <AddPhoto>{t("modal.photo")}</AddPhoto>
          <DownloadContainer>
            {form.secondForm.avatarFile && (
              <Image src={form.secondForm.avatarFile} alt="uploaded" />
            )}
            <Download
              name="avatarFile"
              type="file"
              accept="image/*"
              onChange={handleSecondFormChange}
              multiple
            />
          </DownloadContainer>
          <InputBox>
            <CommentsContainer>
              <Validations
                className={form.secondForm.comment.match(/^(.{8,120})?$/) ? "invalid" : ""}>
                Please enter between 8 and 120 symbols
              </Validations>
              <Comments
                name="comment"
                type="text"
                pattern="^[a-zA-Z0-9,.!?;:-_ ]{8,120}$"
                value={form.secondForm.comment}
                onChange={handleSecondFormChange}
                placeholder={t("modal.comm")}
              />
            </CommentsContainer>
          </InputBox>
          <ButtonContainer>
            <Button type="button" onClick={() => setFormType("firstForm")}>
              {t("modal.back")}
            </Button>
            <Button type="submit" disabled={!hasSecondFormAllData}>
              {t("modal.done")}
            </Button>
          </ButtonContainer>
        </NextFormContainer>
      )}
    </>
  );
}
export default Forma;
