import React, { useState } from 'react';
import {
    InputBox,
    InputLable,
    InputField,
    ButtonContainer,
    Button,
    Comments,
    AddPhoto,
    DownloadPhoto,
} from "./ModalAddsPet.styled";

function Form({ handleClose }) {

    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        date: '',
        image: null,
        comment: ''
    });

    // const handleChangeImg = (e) => {
    //   if (e.target.name === 'image') {
    //     const file = e.target.files[0];
    //     if (file) {
    //       setFormData({
    //         ...formData,
    //         [e.target.name]: file
    //       });
    //     }
    //   } else {
    //     setFormData({
    //       ...formData,
    //       [e.target.name]: e.target.value
    //     });
    //   }
    //     };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
// const handleChangeImg = (event) => {
//     setFormData(event.target.files[0]);
//   };
    const handleSubmit = (e) => {
        e.preventDefault();
        // send the formData to the server or do something else
        console.log(formData);
    };

    const nextStep = () => {
        setStep(2);
    };

    const prevStep = () => {
        setStep(1);
    };

    switch (step) {
        case 1:
            return (
                <form onSubmit={handleSubmit}>
                    <InputField
                        type="text"
                        name="firstName"
                        value={formData.firstName || ''}
                        onChange={handleChange}
                        placeholder="First Name"
                    />
                    <InputField
                        type="text"
                        name="lastName"
                        value={formData.lastName || ''}
                        onChange={handleChange}
                        placeholder="Last Name"
                    />
                    <InputField
                        type="date"
                        name="date"
                        value={formData.date || ''}
                        onChange={handleChange}
                    />
                    <Button type="button" onClick={handleClose}>
                        Close
                    </Button>
                    <Button type="button" onClick={nextStep}>
                        Next
                    </Button>
                </form>
            );
        case 2:
            return (
                <div>
                    {/* <img src="https://via.placeholder.com/150" alt="image"/> */}
                    <input
                        name="image"
                        type="file"
                        value={formData.image || ''}
                        onChange={handleChange}
                    />
                    <Comments
                        name="comment"
                        type="text"
                        value={formData.comment || ''}
                        onChange={handleChange}
                        placeholder="Comment"
                    />
                    <Button type="button" onClick={prevStep}>
                        Back
                    </Button>
                    <Button type="submit" onClick={handleSubmit}>
                        Submit
                    </Button>
                </div>
            );
        default:
            return <div>Something went wrong</div>;
    }
}

export default Form;