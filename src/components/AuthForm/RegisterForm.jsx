import { useState } from "react";
import { ErrorMessage, Formik } from "formik";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { authValidate } from "helpers/validationSchema/authValidate";
import {
  BtnForm,
  FormEl,
  FormTitle,
  FormWrapper,
  InputField,
  ErrorMsg,
  Text,
  LinkAuth,
  BtnFormBack,
  EyePassword,
  Wrapper,
  BtnFormRegister,
} from "./RegisterForm.styled";
import authOperation from "redux/auth/operations";
import { useDispatch } from "react-redux";
import { ImEye, ImEyeBlocked } from "react-icons/im";

export default function RegisterForm() {
  const [currentPage, setCurrentPage] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmShowPassword] = useState(false);

  const dispatch = useDispatch();

  async function onHandleSubmit({ email, password, name, address, phone }) {
    if (!name || !address || !phone) {
      return;
    }
    try {
      const res = await dispatch(
        authOperation.register({
          email,
          password,
          name,
          address,
          phone,
        })
      );
      if (res.payload === 409) {
        return Notify.failure("Email already exist");
      }
    } catch (error) {
      console.log(error);
    }
  }

  function toggleConfirmShowPassword() {
    setConfirmShowPassword((prev) => !prev);
  }

  function toggleShowPassword() {
    setShowPassword((prev) => !prev);
  }

  function onNext() {
    setCurrentPage(true);
  }

  function prevPage() {
    setCurrentPage(false);
  }

  return (
    <>
      <FormWrapper>
        <FormTitle>Registration</FormTitle>
        <Formik
          initialValues={{
            email: "",
            password: "",
            confirmPassword: "",
            name: "",
            address: "",
            phone: "",
          }}
          validationSchema={
            !currentPage
              ? authValidate.RegisterSchemaFirstPage
              : authValidate.RegisterSchemaSecondPage
          }
          onSubmit={currentPage ? onHandleSubmit : onNext}
        >
          {({ handleChange, handleSubmit, values, handleBlur }) => (
            <>
              {!currentPage && (
                <FormEl>
                  <Wrapper>
                    <InputField
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage
                      name="email"
                      render={(msg) => <ErrorMsg>{msg}</ErrorMsg>}
                    />
                  </Wrapper>
                  <Wrapper>
                    <InputField
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage
                      name="password"
                      render={(msg) => <ErrorMsg>{msg}</ErrorMsg>}
                    />
                    <EyePassword type="button" onClick={toggleShowPassword}>
                      {!showPassword ? <ImEye /> : <ImEyeBlocked />}
                    </EyePassword>
                  </Wrapper>
                  <Wrapper>
                    <InputField
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      value={values.confirmPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage
                      name="confirmPassword"
                      render={(msg) => <ErrorMsg>{msg}</ErrorMsg>}
                    />
                    <EyePassword
                      type="button"
                      onClick={toggleConfirmShowPassword}
                    >
                      {!showConfirmPassword ? <ImEye /> : <ImEyeBlocked />}
                    </EyePassword>
                  </Wrapper>
                  <BtnForm type="submit" onClick={handleSubmit}>
                    Next
                  </BtnForm>
                </FormEl>
              )}
              {currentPage && (
                <FormEl>
                  <Wrapper>
                    <InputField
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage
                      name="name"
                      render={(msg) => <ErrorMsg>{msg}</ErrorMsg>}
                    />
                  </Wrapper>
                  <Wrapper>
                    <InputField
                      name="address"
                      placeholder="address"
                      value={values.address}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage
                      name="address"
                      render={(msg) => <ErrorMsg>{msg}</ErrorMsg>}
                    />
                  </Wrapper>
                  <Wrapper>
                    <InputField
                      name="phone"
                      placeholder="Phone"
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage
                      name="phone"
                      render={(msg) => <ErrorMsg>{msg}</ErrorMsg>}
                    />
                  </Wrapper>
                  <BtnFormRegister type="submit" onClick={onHandleSubmit}>
                    Register
                  </BtnFormRegister>
                  <BtnFormBack type="button" onClick={prevPage}>
                    Back
                  </BtnFormBack>
                </FormEl>
              )}
            </>
          )}
        </Formik>
        <Text>
          Already have an account? <LinkAuth to="/login">Login</LinkAuth>
        </Text>
      </FormWrapper>
    </>
  );

  //   return (
  //     <>
  //       {!currentPage && (
  //         <FormWrapper>
  //           <FormTitle>Registration</FormTitle>
  //           <Formik
  //             initialValues={{
  //               email: valueInput.email || "",
  //               password: valueInput.password || "",
  //               confirmPassword: valueInput.confirmPassword || "",
  //             }}
  //             validationSchema={authValidate.RegisterSchemaFirstPage}
  //             onSubmit={({ email, password, confirmPassword }) => {
  //               setFormData({ email, password });
  //               setCurrentPage(true);
  //               setValueInput({ email, password, confirmPassword });
  //             }}
  //           >
  //             {({ handleChange, handleSubmit, values }) => (
  //               <FormEl>
  //                 <InputField
  //                   name="email"
  //                   type="email"
  //                   placeholder="Email"
  //                   value={values.email}
  //                   onChange={handleChange}
  //                 />
  //                 <ErrorMessage
  //                   name="email"
  //                   render={(msg) => <ErrorMsg>{msg}</ErrorMsg>}
  //                 />
  //                 <InputField
  //                   name="password"
  //                   placeholder="Password"
  //                   value={values.password}
  //                   onChange={handleChange}
  //                 />
  //                 <ErrorMessage
  //                   name="password"
  //                   render={(msg) => <ErrorMsg>{msg}</ErrorMsg>}
  //                 />
  //                 <InputField
  //                   name="confirmPassword"
  //                   placeholder="Confirm Password"
  //                   value={values.confirmPassword}
  //                   onChange={handleChange}
  //                 />
  //                 <ErrorMessage
  //                   name="confirmPassword"
  //                   render={(msg) => <ErrorMsg>{msg}</ErrorMsg>}
  //                 />
  //                 <BtnForm type="submit" onClick={handleSubmit}>
  //                   Next
  //                 </BtnForm>
  //               </FormEl>
  //             )}
  //           </Formik>
  //           <Text>
  //             Already have an account? <LinkAuth to="/login">Login</LinkAuth>
  //           </Text>
  //         </FormWrapper>
  //       )}
  //       {currentPage && (
  //         <FormWrapper>
  //           <FormTitle>Registration</FormTitle>
  //           <Formik
  //             initialValues={{
  //               name: valueInputSecondPage.name || "",
  //               address: valueInputSecondPage.address || "",
  //               phone: valueInputSecondPage.phone || "",
  //             }}
  //             validationSchema={authValidate.RegisterSchemaSecondPage}
  //             onSubmit={onHandleSubmit}
  //           >
  //             {({ handleChange, handleSubmit, values }) => (
  // <FormEl>
  // <InputField
  //   name="name"
  //   placeholder="Name"
  //   value={values.name}
  //   onChange={handleChange}
  // />
  // <ErrorMessage
  //   name="name"
  //   render={(msg) => <ErrorMsg>{msg}</ErrorMsg>}
  // />
  // <InputField
  //   name="address"
  //   placeholder="address"
  //   value={values.address}
  //   onChange={handleChange}
  // />
  // <ErrorMessage
  //   name="address"
  //   render={(msg) => <ErrorMsg>{msg}</ErrorMsg>}
  // />
  // <InputField
  //   name="phone"
  //   placeholder="Phone"
  //   value={values.phone}
  //   onChange={handleChange}
  // />
  // <ErrorMessage
  //   name="phone"
  //   render={(msg) => <ErrorMsg>{msg}</ErrorMsg>}
  // />
  // <BtnForm type="submit" onClick={handleSubmit}>
  //   Register
  // </BtnForm>
  // <BtnFormBack type="button" onClick={prevPage}>
  //   Back
  // </BtnFormBack>
  // </FormEl>
  //             )}
  //           </Formik>
  //           <Text>
  //             Already have an account? <LinkAuth to="/login">Login</LinkAuth>
  //           </Text>
  //         </FormWrapper>
  //       )}
  //     </>
  //   );
}
