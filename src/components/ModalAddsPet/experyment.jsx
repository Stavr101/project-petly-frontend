// import React, { useState } from 'react';

// const Forma = () => {
//   const [form, setForm] = useState({
//     firstForm: {
//       textField1: '',
//       textField2: '',
//       date: ''
//     },
//     secondForm: {
//       image: null,
//       comment: ''
//     }
//   });
//   const [formType, setFormType] = useState('firstForm');

//   const handleFirstFormChange = (event) => {
//     setForm({
//       ...form,
//       firstForm: {
//         ...form.firstForm,
//         [event.target.name]: event.target.value
//       }
//     });
//   };

//   const handleSecondFormChange = (event) => {
//     if (event.target.name === 'image') {
//       setForm({
//         ...form,
//         secondForm: {
//           ...form.secondForm,
//           [event.target.name]: URL.createObjectURL(event.target.files[0])
//         }
//       });
//     } else {
//       setForm({
//         ...form,
//         secondForm: {
//           ...form.secondForm,
//           [event.target.name]: event.target.value
//         }
//       });
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(form);
//   };

//   return (
//     <div>
//       {formType === 'firstForm' && (
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="textField1"
//             value={form.firstForm.textField1}
//             onChange={handleFirstFormChange}
//             placeholder="Text Field 1"
//           />
//           <input
//             type="text"
//             name="textField2"
//             value={form.firstForm.textField2}
//             onChange={handleFirstFormChange}
//             placeholder="Text Field 2"
//           />
//           <input
//             type="date"
//             name="date"
//             value={form.firstForm.date}
//             onChange={handleFirstFormChange}
//           />
//           <button
//             type="button"
//             onClick={() => setFormType('secondForm')}
//           >
//             Next
//           </button>
//         </form>
//       )}
//       {formType === 'secondForm' && (
//         <form onSubmit={handleSubmit}>
//           <input
//             type="file"
//             name="image"
//             accept="image/*"
//             onChange={handleSecondFormChange}
//           />
//           {form.secondForm.image && (
//             <img src={form.secondForm.image} alt="uploaded" />
//           )}
//           <textarea
//             name="comment"
//             value={form.secondForm.comment}
//             onChange={handleSecondFormChange}
//             placeholder="Comment"
//           />
//           <button
//             type="button"
//             onClick={() => setFormType('firstForm')}
//           >
//             Back
//           </button>
//           <button type="submit">Submit</button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default Forma;

import React, { useState } from 'react';
import * as Yup from 'yup';

const AddsPetFirstPageSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Z]{2,16}$/, 'Name must be 2-16 letters and only contain alphabets'),
    
  breed: Yup.string()
    .matches(/^[a-zA-Z]{2,16}$/, 'Breed must be 2-16 letters and only contain alphabets'),
});

// const AddsPetSecondPageSchema = Yup.object().shape({
//   comments: Yup.string()
//     .matches(/^[a-zA-Z]{8,120}$/, 'Comments must be 8-120 letters and only contain alphabets'),
   
// });

const Forma = () => {
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    name: '',
    breed: '',
    comments: '',
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await AddsPetFirstPageSchema.validate(values, { abortEarly: false });
      // handle success, move to next page of form or submit form
    } catch (err) {
      const validationErrors = {};
      err.inner.forEach((error) => {
        validationErrors[error.path] = error.message;
      });
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={values.name}
          onChange={handleChange}
        />
        {errors.name && <div>{errors.name}</div>}
      </div>

      <div>
        <label htmlFor="breed">Breed:</label>
        <input
          type="text"
          name="breed"
          id="breed"
          value={values.breed}
          onChange={handleChange}
        />
        {errors.breed && <div>{errors.breed}</div>}
      </div>

      <button type="submit">Next</button>
    </form>
  );
};

export default Forma;