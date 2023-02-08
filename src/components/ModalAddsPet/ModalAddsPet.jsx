import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPet } from "redux/pets/operations";

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
  DownloadContainer,
  NextFormContainer,
} from "./ModalAddsPet.styled";

import * as Yup from "yup";

// import { AddsPetValidate } from "helpers/validationSchema/addsPetValidate";
function Forma({ handleClose }) {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
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

  // const combinedForm = { ...form.firstForm, ...form.secondForm };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log("in form event", event.target.elements.avatarFile.files[0]);
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
              value={form.firstForm.breed}
              onChange={handleFirstFormChange}
              placeholder="Breed"
            />
            {/* {errors.breed && <div>{errors.firstForm.breed}</div>} */}
          </InputBox>
          <ButtonContainer>
            <Button type="button" onClick={handleClose}>
              Close
            </Button>
            <Button
              type="button"
              onClick={() => setFormType("secondForm")}
              disabled={!hasFirstFormAllData}
            >
              Next
            </Button>
          </ButtonContainer>
        </FormContainer>
      )}
      {formType === "secondForm" && (
        <NextFormContainer encType="mutipart/form-data" onSubmit={handleSubmit}>
          <AddPhoto>Add photo and some comments</AddPhoto>
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
            <Button type="button" onClick={() => setFormType("firstForm")}>
              Back
            </Button>
            <Button type="submit" disabled={!hasSecondFormAllData}>
              Submit
            </Button>
          </ButtonContainer>
        </NextFormContainer>
      )}
    </>
  );
}

export default Forma;
