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
    DownloadContainer,
    NextFormContainer
} from "./ModalAddsPet.styled";

import * as Yup from 'yup';

// import { AddsPetValidate } from "helpers/validationSchema/addsPetValidate";


function Forma({ handleClose }) {
    const [errors, setErrors] = useState({});
    const [form, setForm] = useState({
        firstForm: {
            name: '',
            date: '',
            breed: '',

        },
        secondForm: {
            image: null,
            comment: ''
        }
    });

    const [formType, setFormType] = useState('firstForm');;

    const handleFirstFormChange = (event) => {
        setForm({
            ...form,
            firstForm: {
                ...form.firstForm,
                [event.target.name]: event.target.value
            }
        });
    };

    const handleSecondFormChange = (event) => {
        if (event.target.name === 'image') {
            setForm({
                ...form,
                secondForm: {
                    ...form.secondForm,
                    [event.target.name]: URL.createObjectURL(event.target.files[0])
                }
            });
        } else {
            setForm({
                ...form,
                secondForm: {
                    ...form.secondForm,
                    [event.target.name]: event.target.value
                }
            });
        }
    };

const combinedForm = { ...form.firstForm, ...form.secondForm };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(combinedForm);
           setForm({
            firstForm: {
                name: '',
                date: '',
                breed: '',

            },
            secondForm: {
                image: null,
                comment: ''
            }
        });

    }
        
        

        return (
            <>
                {formType === 'firstForm' && (
                    <FormContainer onSubmit={handleSubmit}>
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
                            <Button type="button" onClick={handleClose}>
                                Close
                            </Button>
                            <Button
                                type="button"
                                onClick={() => setFormType('secondForm')}
                            >
                                Next
                            </Button>
                        </ButtonContainer>
                    </FormContainer>
                )}
                {formType === 'secondForm' && (
                    <NextFormContainer encType='mutipart/form-data' onSubmit={handleSubmit}>
                        <AddPhoto>Add photo and some comments</AddPhoto>
                        <DownloadContainer >
                            {form.secondForm.image && (
                                <Image src={form.secondForm.image} alt="uploaded" />
                            )}
                            <Download

                                name="image"
                                type="file"
                                accept='image/*'
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
                            <Button type="button" onClick={() => setFormType('firstForm')}
                            >
                                Back
                            </Button>
                            <Button type="submit" >
                                Submit
                            </Button>
                        </ButtonContainer>
                    </NextFormContainer>
                )}
            </>
        );
    };


    export default Forma;