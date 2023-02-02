import * as Yup from 'yup';

const AddsPetFirstPageSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Z]{2,16}$/, 'Name must be 2-16 letters and only contain alphabets'),
    
    breed: Yup.string()
    .matches(/^[a-zA-Z]{2,16}$/, 'Name must be 2-16 letters and only contain alphabets'),
});

const AddsPetSecondPageSchema = Yup.object().shape({
  comments: Yup.string()
    .matches(/^[a-zA-Z]{8,120}$/, 'Comments must be 8-120 letters and only contain alphabets'),
   
});

export const AddsPetValidate = {
    AddsPetFirstPageSchema,
    AddsPetSecondPageSchema
};