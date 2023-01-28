import React, { useState } from "react";
import styled from "styled-components";

interface FormValues {
  username: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setFormValues((formValues) => ({
      ...formValues,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      // Perform sign up logic here, such as sending a request to a server
      // If successful, redirect the user to the home page
    } catch (err:any) {
      setError(err.message);
    }
  };

  return (
    <Container>
      <FormContainer>
        <FormTitle>Create your Amazon account</FormTitle>
        <Form onSubmit={handleSubmit}>
          <Label>Username</Label>
          <Input
            type="text"
            name="username"
            value={formValues.username}
            onChange={handleInputChange}
            placeholder="Your name or nickname"
          />
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleInputChange}
            placeholder="Your email address"
          />
          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleInputChange}
            placeholder="Your password"
          />
          <Button type="submit">Create your Amazon account</Button>
          {error && <Error>{error}</Error>}
        </Form>
      </FormContainer>
    </Container>
  );
};

export default SignUp

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f9f9f9;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
`;

const FormTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Form = styled.form`
  width: 100%;
  max-width: 400px;
`;

const Label = styled.label`
  font-size: 1.2rem;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  font-size: 1.2rem;
  border-radius: 5px;
  border: 1px solid lightgray;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  background-color: #ff9900;
  color: white;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #ffb600;
  }
`;

const Error = styled.div`
  color: red;
  font-size: 1.2rem;
  margin-top: 1rem;
`;
