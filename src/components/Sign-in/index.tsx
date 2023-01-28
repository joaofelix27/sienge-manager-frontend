import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { StyledButton, StyledError, StyledForm, StyledInput } from "./styled";



const SignIn: React.FC = () => {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: yup.object({
      email: yup.string().email().required(),
      password: yup.string().required().min(8).max(16),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      try {
        // Perform API call or any other async task
        // ...

        // Navigate to the home page
      } catch (error) {
        // Handle error
        // ...
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <h1>Sign In</h1>
      <StyledInput
        id="email"
        type="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="Email"
      />
      {formik.touched.email && formik.errors.email && (
        <StyledError>{formik.errors.email}</StyledError>
      )}
      <StyledInput
        id="password"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder="Password"
      />
      {formik.touched.password && formik.errors.password && (
        <StyledError>{formik.errors.password}</StyledError>
      )}
      <StyledButton type="submit" disabled={formik.isSubmitting}>
        Sign In
      </StyledButton>
    </StyledForm>
  );
};

export default SignIn;
