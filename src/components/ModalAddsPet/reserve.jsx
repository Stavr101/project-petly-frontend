import React, { useState } from "react";
import {  Formik, Form } from "formik";
import PropTypes from "prop-types";

import {
  InputBox,
  InputLable,
  InputField,
  ButtonContainer,
  Button,
  Comments,
  AddPhoto,
  DownloadPhoto,
} from "./reserve.styled";

export const Forma = ({ handleClose }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalNext, setModalNext] = useState(false);
  const [formData, setFormData] = useState({});
  console.log({ formData });

  const handleBase = (e) => {
    e.preventDefault();
    setModalNext(false);
  };

  // const handleSubmit = async (values) => {
  //   console.log(values);
  //   onSubmit(values);
  // };

  
  function petDetailsHandler(values) {
    setFormData(values);
    setModalNext(true);
  }

  function petAditionalDetailsHandler(values) {
    setFormData({ ...formData, ...values });
      }

  
  
  
  return (
    <>
      {!modalNext ? (
        <Formik
          initialValues={{
            name: "",
            dateOfBirth: "",
            breed: "",
          }}
          
          onSubmit={petDetailsHandler}
        >
          {/* <FormContainer> */}
          <Form>
            <InputBox>
              <InputLable htmlFor="name">Name pet</InputLable>
              <InputField
                id="name"
                type="text"
                name="name"
                // pattern="/^[a-zA-Z]{2,16}$/"
                placeholder="Type name pet"
                // required
              />
            </InputBox>
            <InputBox>
              <InputLable htmlFor="dateOfBirth">Date of birth</InputLable>
              <InputField
                id="dateOfBirth"
                type="date"
                name="dateOfBirth"
                pattern="\d{2}\.\d{2}\.\d{4}"
                placeholder="Type date of birth"
                // required
              />
            </InputBox>
            <InputBox>
              <InputLable htmlFor="breed">Breed</InputLable>
              <InputField
                id="breed"
                type="text"
                name="breed"
                // pattern="/^[a-zA-Z]{2,16}$/"
                placeholder="Type breed"
              />
            </InputBox>
            <ButtonContainer>
              <Button type="submit">Next</Button>
              <Button onClick={handleClose}>Cancel</Button>
            </ButtonContainer>
          </Form>
          {/* </FormContainer> */}
        </Formik>
      ) : (
        <Formik
          initialValues={{
            photo: "",
            about: "",
          }}
          onSubmit={petAditionalDetailsHandler}
        >
          {/* <FormContainer> */}
          {(formikProps) => (
            <Form>
              <AddPhoto>Add photo and some comments</AddPhoto>
              <InputBox>
                <DownloadPhoto
                  id="photo"
                  type="file"
                  label="photo"
                  accept="image*/"
                  onChange={(event) => {formikProps.setFieldValue("photo", event.currentTarget.files[0]);
                  }}
                />
                <label htmlFor="photo">Upload</label>
              </InputBox>
              <InputBox>
                <InputLable htmlFor="about">Comments</InputLable>
                <InputField
                  id="about"
                  type="text"
                  name="about"
                  patern="^[a-zA-Z0-9,.!?;:-_ ]{8,120}$"
                  // value={formikProps.values.about}
                  // onChange={formikProps.about}
                    placeholder="About your pet"
                    
                />
              </InputBox>

              <ButtonContainer>
                <Button variant="contained" onClick={handleBase}>
                  Back
                </Button>
                <Button type="submit">Done</Button>
              </ButtonContainer>
            </Form>
          )}
          {/* </FormContainer> */}
        </Formik>
      )}
    </>
  );
};

// ModalAddsPet.propTypes = {
//   handleDone: PropTypes.func,
// };
